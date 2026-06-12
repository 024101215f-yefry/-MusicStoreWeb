// ============================================================
// MusicStore Web - Aplicación Principal
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // TOAST SYSTEM
  // ============================================================
  function mostrarToast(mensaje, icono = '🎵', duracion = 3500) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${icono}</span>
      <span class="toast-message">${mensaje}</span>
      <button class="toast-close">&times;</button>
    `;
    container.appendChild(toast);
    toast.querySelector('.toast-close').addEventListener('click', () => cerrarToast(toast));
    setTimeout(() => cerrarToast(toast), duracion);
  }

  function cerrarToast(toast) {
    if (toast.classList.contains('toast-out')) return;
    toast.classList.add('toast-out');
    setTimeout(() => toast.remove(), 300);
  }

  // ============================================================
  // ROUTER
  // ============================================================
  let sesionActual = null;
  let clienteActivo = null;

  function navegar(ruta) {
    if (!sesionActual) {
      document.querySelectorAll('.layout').forEach(l => l.classList.remove('active'));
      mostrarVista('login');
      return;
    }
    if (sesionActual.rol === 'admin') {
      mostrarLayout('admin');
      const adminRuta = ruta.replace('admin/', '') || 'dashboard';
      mostrarVistaAdmin(adminRuta);
    } else {
      mostrarLayout('cliente');
      const parts = ruta ? ruta.split('/') : ['dashboard'];
      const vista = parts[0] || 'dashboard';
      const params = parts[1] || null;
      mostrarVistaCliente(vista, params);
    }
  }

  function mostrarVista(id) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const vista = document.getElementById('view-' + id);
    if (vista) vista.classList.add('active');
  }

  const LAYOUT_MAP = { 'cliente': 'client-layout', 'admin': 'admin-layout' };

  function mostrarLayout(rol) {
    document.querySelectorAll('.layout').forEach(l => l.classList.remove('active'));
    const layoutId = LAYOUT_MAP[rol] || (rol + '-layout');
    const layout = document.getElementById(layoutId);
    if (layout) {
      layout.classList.add('active');
    } else {
      console.error('Layout no encontrado:', layoutId);
    }
    document.getElementById('view-login').classList.remove('active');
  }

  function safeRender(fn, nombre) {
    try { fn(); } catch (e) { console.error('Error renderizando ' + nombre + ':', e); }
  }

  function mostrarVistaCliente(vista, params) {
    document.querySelectorAll('#client-layout .view').forEach(v => v.classList.remove('active'));
    const v = document.getElementById('view-client-' + vista);
    if (v) v.classList.add('active');
    actualizarNavCliente(vista);
    if (vista === 'dashboard') safeRender(renderDashboardCliente, 'dashboard cliente');
    else if (vista === 'catalog') safeRender(renderCatalog, 'catálogo');
    else if (vista === 'album') safeRender(() => renderAlbumDetail(params), 'detalle álbum');
    else if (vista === 'invoices') safeRender(renderInvoices, 'facturas');
    else if (vista === 'playlists') safeRender(renderPlaylists, 'playlists');
  }

  function mostrarVistaAdmin(vista) {
    document.querySelectorAll('#admin-layout .view').forEach(v => v.classList.remove('active'));
    const v = document.getElementById('view-admin-' + vista);
    if (v) v.classList.add('active');
    actualizarNavAdmin(vista);
    if (vista === 'dashboard') safeRender(renderAdminDashboard, 'dashboard admin');
    else if (vista === 'clients') safeRender(renderAdminClientes, 'clientes admin');
    else if (vista === 'employees') safeRender(renderAdminEmpleados, 'empleados admin');
    else if (vista === 'reports') safeRender(renderAdminReportes, 'reportes admin');
  }

  function actualizarNavCliente(activa) {
    document.querySelectorAll('.client-nav .nav-link').forEach(l => l.classList.remove('active'));
    const map = { dashboard: 'inicio', catalog: 'catalogo', invoices: 'facturas', playlists: 'playlists' };
    const href = map[activa];
    document.querySelectorAll(`.client-nav .nav-link[data-view="client-${activa}"]`).forEach(l => l.classList.add('active'));
  }

  function actualizarNavAdmin(activa) {
    document.querySelectorAll('.admin-nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll(`.admin-nav-link[data-view="admin-${activa}"]`).forEach(l => l.classList.add('active'));
  }

  // ============================================================
  // LOGIN / AUTH
  // ============================================================
  function login(rol, email, password) {
    if (rol === 'admin') {
      if (email === admin.email && password === admin.password) {
        sesionActual = { rol: 'admin', usuario: admin };
        mostrarToast('Bienvenido al panel de administración', '📊');
        navegar('admin/dashboard');
        document.getElementById('admin-user-name').textContent = admin.nombre;
        return true;
      }
      mostrarToast('Credenciales de administrador incorrectas', '❌');
      return false;
    } else {
      const cliente = clientes.find(c => c.email === email && c.password === password);
      if (cliente) {
        sesionActual = { rol: 'cliente', usuario: cliente };
        clienteActivo = cliente;
        mostrarToast(`¡Bienvenido ${cliente.nombre}! 🎵`, '🎉');
        document.getElementById('client-user-name').textContent = 'Hola, ' + cliente.nombre.split(' ')[0];
        document.getElementById('client-avatar').textContent = cliente.avatar;
        document.getElementById('welcome-name').textContent = cliente.nombre.split(' ')[0];
        navegar('dashboard');
        return true;
      }
      mostrarToast('Credenciales incorrectas. Intenta de nuevo.', '❌');
      return false;
    }
  }

  function loginRapido(rol) {
    if (rol === 'cliente') {
      const demo = clientes[0];
      sesionActual = { rol: 'cliente', usuario: demo };
      clienteActivo = demo;
      document.getElementById('client-user-name').textContent = 'Hola, ' + demo.nombre.split(' ')[0];
      document.getElementById('client-avatar').textContent = demo.avatar;
      document.getElementById('welcome-name').textContent = demo.nombre.split(' ')[0];
      mostrarToast('¡Bienvenido a MusicStore, ' + demo.nombre.split(' ')[0] + '! 🎵', '🎉');
      navegar('dashboard');
    } else {
      sesionActual = { rol: 'admin', usuario: admin };
      document.getElementById('admin-user-name').textContent = admin.nombre;
      mostrarToast('Bienvenido al panel de administración', '📊');
      navegar('admin/dashboard');
    }
  }

  function cerrarSesion() {
    sesionActual = null;
    clienteActivo = null;
    document.querySelectorAll('.layout').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById('view-login').classList.add('active');
    mostrarToast('Sesión cerrada. ¡Hasta pronto! 👋', '👋');
  }

  // ============================================================
  // RENDER: DASHBOARD CLIENTE
  // ============================================================
  function renderDashboardCliente() {
    if (!clienteActivo) return;
    const uid = clienteActivo.id;
    document.getElementById('kpi-total-gastado').textContent = formatearMoneda(totalGastadoCliente(uid));
    document.getElementById('kpi-canciones').textContent = obtenerCancionesCliente(uid).length;
    document.getElementById('kpi-playlists').textContent = obtenerPlaylistsCliente(uid).length;
    const ultima = ultimaFacturaCliente(uid);
    document.getElementById('kpi-ultima-factura').textContent = ultima ? formatearMoneda(ultima.total) : 'S/. 0.00';

    renderNovedades();
    renderCategorias();
    renderAlbumesDestacados();
  }

  function renderNovedades() {
    const container = document.getElementById('novedades-carousel');
    const novedades = albumes.filter(a => a.esNuevo || a.esTendencia).slice(0, 6);
    if (novedades.length === 0) {
      container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">🎵</div><h3>Próximamente</h3><p>Nuevos lanzamientos están en camino. ¡Vuelve pronto!</p></div>`;
      return;
    }
    container.innerHTML = novedades.map(a => renderAlbumCard(a)).join('');
    attachAlbumCardEvents(container);
  }

  function renderCategorias() {
    const container = document.getElementById('categorias-chips');
    container.innerHTML = generos.map(g => `<button class="chip" data-genero="${g}">${g}</button>`).join('');
    container.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        mostrarToast(`Explorando ${chip.dataset.genero} 🎶`, '🎧');
        navegar('catalog');
      });
    });
  }

  function renderAlbumesDestacados() {
    const container = document.getElementById('albumes-destacados');
    const destacados = albumes.filter(a => a.esTendencia).slice(0, 4);
    container.innerHTML = destacados.map(a => renderAlbumCard(a)).join('');
    attachAlbumCardEvents(container);
  }

  // ============================================================
  // RENDER: CATÁLOGO
  // ============================================================
  let filtroGenero = 'all';
  let filtroPrecio = 'all';
  let filtroArtista = 'all';
  let sortAlbumes = 'nombre';

  function renderCatalog() {
    renderFilterGeneros();
    renderFilterArtistas();
    applyFilters();
    document.getElementById('btn-clear-filters').addEventListener('click', () => {
      filtroGenero = 'all';
      filtroPrecio = 'all';
      filtroArtista = 'all';
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      document.querySelector('.filter-chip[data-precio="all"]').classList.add('active');
      document.getElementById('filter-artista').value = 'all';
      document.getElementById('sort-albumes').value = 'nombre';
      sortAlbumes = 'nombre';
      applyFilters();
    });
    document.getElementById('sort-albumes').addEventListener('change', (e) => {
      sortAlbumes = e.target.value;
      applyFilters();
    });
  }

  function renderFilterGeneros() {
    const container = document.getElementById('filter-generos');
    container.innerHTML = '<button class="chip filter-chip active" data-genero="all">Todos</button>';
    generos.forEach(g => {
      container.innerHTML += `<button class="chip filter-chip" data-genero="${g}">${g}</button>`;
    });
    container.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip) return;
      container.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filtroGenero = chip.dataset.genero;
      applyFilters();
    });
  }

  function renderFilterArtistas() {
    const select = document.getElementById('filter-artista');
    select.innerHTML = '<option value="all">Todos los artistas</option>';
    artistas.forEach(a => {
      select.innerHTML += `<option value="${a.id}">${a.nombre}</option>`;
    });
    select.addEventListener('change', (e) => {
      filtroArtista = e.target.value;
      applyFilters();
    });
  }

  function applyFilters() {
    let resultados = [...albumes];
    if (filtroGenero !== 'all') resultados = resultados.filter(a => a.genero === filtroGenero);
    if (filtroArtista !== 'all') resultados = resultados.filter(a => a.artistaId === parseInt(filtroArtista));
    if (filtroPrecio !== 'all') {
      const [min, max] = filtroPrecio.split('-').map(Number);
      resultados = resultados.filter(a => a.precio >= min && a.precio <= max);
    }

    switch (sortAlbumes) {
      case 'nombre': resultados.sort((a, b) => a.titulo.localeCompare(b.titulo)); break;
      case 'precio-asc': resultados.sort((a, b) => a.precio - b.precio); break;
      case 'precio-desc': resultados.sort((a, b) => b.precio - a.precio); break;
      case 'nuevo': resultados.sort((a, b) => b.año - a.año); break;
    }

    const container = document.getElementById('catalog-albums');
    if (resultados.length === 0) {
      container.innerHTML = `
        <div class="empty-state" style="grid-column: 1/-1">
          <div class="empty-state-icon">🔍</div>
          <h3>Sin resultados</h3>
          <p>No encontramos álbumes con esos filtros. ¡Intenta con otros!</p>
          <button class="btn" onclick="document.getElementById('btn-clear-filters').click()">Limpiar Filtros</button>
        </div>
      `;
    } else {
      container.innerHTML = resultados.map(a => renderAlbumCard(a)).join('');
    }
    attachAlbumCardEvents(container);
    document.getElementById('catalog-count').textContent = `${resultados.length} álbum${resultados.length !== 1 ? 'es' : ''}`;

    // Filter chips for price
    document.querySelectorAll('.filter-chip[data-precio]').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.filter-chip[data-precio]').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        filtroPrecio = chip.dataset.precio;
        applyFilters();
      });
    });
  }

  // ============================================================
  // RENDER: ALBUM CARD (reusable)
  // ============================================================
  function renderAlbumCard(album) {
    const artista = obtenerArtista(album.artistaId);
    const badges = [];
    if (album.esNuevo) badges.push('<span class="album-card-badge badge-new">NUEVO</span>');
    if (album.esTendencia) badges.push('<span class="album-card-badge badge-trending">TENDENCIA</span>');
    return `
      <div class="album-card" data-album-id="${album.id}">
        <div class="album-card-image" style="background: ${album.portadaColor}">
          ${badges.join('')}
          <span>${album.imagen}</span>
        </div>
        <div class="album-card-body">
          <h4>${album.titulo}</h4>
          <div class="album-artist">${artista ? artista.nombre : 'Artista Desconocido'}</div>
        </div>
        <div class="album-card-footer">
          <span class="album-price">${formatearMoneda(album.precio)}</span>
          <button class="btn-album-view" data-album-id="${album.id}">Ver álbum</button>
        </div>
      </div>
    `;
  }

  function attachAlbumCardEvents(container) {
    container.querySelectorAll('.album-card, .btn-album-view').forEach(el => {
      el.addEventListener('click', (e) => {
        const id = el.dataset.albumId || el.closest('.album-card')?.dataset.albumId;
        if (id) navegar(`album/${id}`);
      });
    });
  }

  // ============================================================
  // RENDER: DETALLE ÁLBUM
  // ============================================================
  function renderAlbumDetail(params) {
    const albumId = parseInt(params);
    const album = obtenerAlbum(albumId);
    if (!album) {
      document.getElementById('album-detail-container').innerHTML = '<div class="empty-state"><div class="empty-state-icon">❌</div><h3>Álbum no encontrado</h3></div>';
      return;
    }

    const artista = obtenerArtista(album.artistaId);
    const pistas = obtenerPistasAlbum(albumId);
    const container = document.getElementById('album-detail-container');

    container.innerHTML = `
      <div class="album-detail">
        <div class="album-detail-cover">
          <div class="album-detail-image" style="background: ${album.portadaColor}; box-shadow: 0 0 50px ${album.portadaColor}66;">
            ${album.imagen}
          </div>
        </div>
        <div class="album-detail-info">
          <h2>${album.titulo}</h2>
          <div class="album-detail-artist">${artista ? artista.nombre : ''}</div>
          <div class="album-detail-year">${album.año} · ${album.genero}</div>
          <p class="album-detail-description">${album.descripcion}</p>
          <div class="album-detail-pricing">
            <span class="album-detail-price">${formatearMoneda(album.precio)}</span>
            <button class="album-detail-buy-btn" id="btn-comprar-album">Comprar álbum ${formatearMoneda(album.precio)}</button>
          </div>
          <div class="tags">
            ${album.esNuevo ? '<span class="chip" style="background:rgba(168,85,247,0.2);border-color:var(--cliente-primario);color:var(--cliente-primario)">🆕 NUEVO</span>' : ''}
            ${album.esTendencia ? '<span class="chip" style="background:rgba(245,158,11,0.2);border-color:#F59E0B;color:#F59E0B">🔥 TENDENCIA</span>' : ''}
          </div>
        </div>
      </div>
      <div class="tracks-section">
        <h3>🎶 Lista de Pistas (${pistas.length})</h3>
        <div class="table-container">
          <table class="tracks-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Título</th>
                <th>Duración</th>
                <th>Precio</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              ${pistas.map((p, i) => `
                <tr>
                  <td class="track-number">${i + 1}</td>
                  <td class="track-title">${p.titulo}</td>
                  <td class="track-duration">${p.duracion}</td>
                  <td class="track-price">${formatearMoneda(p.precio)}</td>
                  <td><button class="btn-track-buy" data-pista-id="${p.id}" data-pista-nombre="${p.titulo}">Comprar pista ${formatearMoneda(p.precio)}</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    document.getElementById('btn-comprar-album').addEventListener('click', () => {
      mostrarToast(`¡"${album.titulo}" agregado a tu colección! 🎉`, '🎵');
      actualizarMiniPlayer(album, artista);
    });

    container.querySelectorAll('.btn-track-buy').forEach(btn => {
      btn.addEventListener('click', () => {
        const nombre = btn.dataset.pistaNombre;
        mostrarToast(`¡"${nombre}" agregada a tu colección! 🎵`, '🎶');
        if (artista) {
          actualizarMiniPlayer({ titulo: nombre, imagen: album.imagen, portadaColor: album.portadaColor }, artista);
        }
      });
    });
  }

  // ============================================================
  // MINI PLAYER
  // ============================================================
  function actualizarMiniPlayer(album, artista) {
    const player = document.getElementById('mini-player');
    if (player) {
      player.querySelector('.mini-player-thumb').textContent = album.imagen || '🎵';
      player.querySelector('.mini-player-thumb').style.background = album.portadaColor || 'var(--cliente-tarjeta)';
      player.querySelector('.mini-player-title').textContent = album.titulo || 'Canción';
      player.querySelector('.mini-player-artist').textContent = artista ? artista.nombre : 'Artista';
      player.querySelector('.progress-fill').style.width = '0%';
      player.querySelector('.progress-time').textContent = '0:00 / 3:30';

      // Simulate playback
      let pct = 0;
      const interval = setInterval(() => {
        pct += 1;
        player.querySelector('.progress-fill').style.width = Math.min(pct, 100) + '%';
        const mins = Math.floor((pct / 100) * 3);
        const secs = Math.floor(((pct / 100) * 3 * 60) % 60);
        player.querySelector('.progress-time').textContent = `${mins}:${String(secs).padStart(2, '0')} / 3:30`;
        if (pct >= 100) clearInterval(interval);
      }, 300);
    }
  }

  // ============================================================
  // RENDER: FACTURAS
  // ============================================================
  function renderInvoices() {
    const container = document.getElementById('invoices-content');
    if (!clienteActivo) return;
    const facturasCliente = obtenerFacturasCliente(clienteActivo.id);
    if (facturasCliente.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🧾</div>
          <h3>Aún no tienes facturas</h3>
          <p>Cuando realices tu primera compra, aquí aparecerá el detalle de tus facturas.</p>
          <a href="#catalogo" class="btn" data-view="client-catalog">Explorar Catálogo 🎶</a>
        </div>
      `;
      container.querySelector('.empty-state .btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        navegar('catalog');
      });
      return;
    }
    container.innerHTML = `
      <div class="table-container">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Factura #</th>
              <th>Fecha</th>
              <th>Items</th>
              <th>Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            ${facturasCliente.sort((a,b) => new Date(b.fecha) - new Date(a.fecha)).map(f => `
              <tr>
                <td><strong>#${f.id}</strong></td>
                <td>${new Date(f.fecha).toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
                <td>${f.items.map(i => i.tipo === 'album' ? obtenerAlbum(i.albumId)?.titulo || 'Álbum' : obtenerPista(i.pistaId)?.titulo || 'Pista').join(', ')}</td>
                <td style="font-weight:600;color:var(--cliente-primario)">${formatearMoneda(f.total)}</td>
                <td><span class="chip" style="${f.estado === 'Completado' ? 'background:rgba(16,185,129,0.2);border-color:#10B981;color:#10B981' : 'background:rgba(245,158,11,0.2);border-color:#F59E0B;color:#F59E0B'}">${f.estado}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // ============================================================
  // RENDER: PLAYLISTS
  // ============================================================
  function renderPlaylists() {
    const container = document.getElementById('playlists-content');
    if (!clienteActivo) return;
    const playlistsCliente = obtenerPlaylistsCliente(clienteActivo.id);
    if (playlistsCliente.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">😢</div>
          <h3>Aún no tienes playlists</h3>
          <p>Crea tu primera playlist para empezar a vibrar con la mejor música latina.</p>
          <button class="btn" id="btn-crear-playlist">Crear mi primera playlist 🎶</button>
        </div>
      `;
      document.getElementById('btn-crear-playlist')?.addEventListener('click', () => {
        mostrarToast('¡Nueva playlist creada! Agrega tus canciones favoritas 🎉', '🎶');
        // Simulate adding a playlist
        playlists.push({
          id: Date.now(),
          nombre: 'Mi primera playlist 💜',
          descripcion: 'Mis canciones favoritas',
          usuarioId: clienteActivo.id,
          pistas: []
        });
        renderPlaylists();
      });
      return;
    }
    container.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:16px">
        ${playlistsCliente.map(p => {
          const pistasList = p.pistas.map(id => obtenerPista(id)).filter(Boolean);
          return `
            <div class="kpi-card client-kpi" style="flex-direction:column;align-items:flex-start;gap:12px;cursor:pointer">
              <div style="display:flex;align-items:center;gap:12px;width:100%">
                <span style="font-size:32px">🎧</span>
                <div>
                  <div style="font-weight:600;font-size:16px">${p.nombre}</div>
                  <div style="font-size:13px;color:var(--cliente-texto-secundario);opacity:0.7">${pistasList.length} canciones</div>
                </div>
              </div>
              <p style="font-size:13px;color:var(--cliente-texto-secundario);opacity:0.6">${p.descripcion}</p>
              <div style="font-size:12px;color:var(--cliente-texto-secundario);opacity:0.5">
                ${pistasList.slice(0, 3).map(pt => pt.titulo).join(' · ')}${pistasList.length > 3 ? ' · y más...' : ''}
              </div>
            </div>
          `;
        }).join('')}
        <div class="kpi-card client-kpi" style="flex-direction:column;align-items:center;justify-content:center;gap:12px;cursor:pointer;border-style:dashed" id="btn-nueva-playlist">
          <span style="font-size:36px">➕</span>
          <span style="font-size:14px;color:var(--cliente-texto-secundario);opacity:0.7">Crear nueva playlist</span>
        </div>
      </div>
    `;
    document.getElementById('btn-nueva-playlist')?.addEventListener('click', () => {
      mostrarToast('¡Nueva playlist creada con éxito! 🎉', '🎶');
      playlists.push({
        id: Date.now(),
        nombre: 'Nueva playlist 🎵',
        descripcion: 'Personaliza tu lista',
        usuarioId: clienteActivo.id,
        pistas: []
      });
      renderPlaylists();
    });
  }

  // ============================================================
  // RENDER: ADMIN DASHBOARD
  // ============================================================
  function renderAdminDashboard() {
    const ventasMes = ventasPorMes[ventasPorMes.length - 1];
    document.getElementById('admin-kpi-ventas').textContent = formatearMoneda(ventasMes.ingresos);
    document.getElementById('admin-kpi-clientes').textContent = clientes.length;
    const totalCanciones = rankingCanciones.reduce((s, c) => s + c.ventas, 0);
    document.getElementById('admin-kpi-canciones').textContent = totalCanciones.toLocaleString();
    document.getElementById('admin-kpi-empleados').textContent = empleados.length;

    renderChartBarras();
    renderChartDonut();
    renderTopCanciones();
  }

  function renderChartBarras() {
    const container = document.getElementById('chart-ventas-mes');
    const max = Math.max(...ventasPorMes.map(v => v.ingresos));
    container.innerHTML = ventasPorMes.map(v => {
      const height = (v.ingresos / max) * 100;
      return `
        <div class="chart-bar-wrapper">
          <div class="chart-bar" style="height:${height}%" title="${formatearMoneda(v.ingresos)}"></div>
          <span class="chart-bar-label">${v.mes.substring(0, 3)}</span>
        </div>
      `;
    }).join('');
  }

  function renderChartDonut() {
    const container = document.getElementById('chart-genero');
    const total = ventasPorGenero.reduce((s, g) => s + g.porcentaje, 0);
    let cumulative = 0;
    const segments = ventasPorGenero.map(g => {
      const start = cumulative;
      cumulative += (g.porcentaje / total) * 360;
      return { ...g, start, end: cumulative };
    });

    const radius = 70;
    const cx = 100;
    const cy = 100;
    const circ = 2 * Math.PI * radius;

    let paths = segments.map((seg, i) => {
      const offset = (seg.start / 360) * circ;
      const len = ((seg.end - seg.start) / 360) * circ;
      return `<circle cx="${cx}" cy="${cy}" r="${radius}" fill="none" stroke="${seg.color}" stroke-width="20" stroke-dasharray="${len} ${circ - len}" stroke-dashoffset="${-offset}" transform="rotate(-90 ${cx} ${cy})" />`;
    }).join('');

    container.innerHTML = `
      <svg class="donut-svg" width="160" height="160" viewBox="0 0 200 200">
        ${paths}
        <circle cx="${cx}" cy="${cy}" r="${radius - 15}" fill="var(--admin-tarjeta)" />
        <text x="${cx}" y="${cy - 8}" text-anchor="middle" fill="var(--admin-texto)" font-size="28" font-weight="700">${total}%</text>
        <text x="${cx}" y="${cy + 14}" text-anchor="middle" fill="var(--admin-texto-secundario)" font-size="12">Ventas</text>
      </svg>
      <div class="donut-legend">
        ${ventasPorGenero.map(g => `
          <div class="donut-legend-item">
            <span class="donut-legend-color" style="background:${g.color}"></span>
            ${g.genero} (${g.porcentaje}%)
          </div>
        `).join('')}
      </div>
    `;
  }

  function renderTopCanciones() {
    const tbody = document.getElementById('top-canciones-body');
    tbody.innerHTML = rankingCanciones.map((c, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><strong>${c.titulo}</strong></td>
        <td>${c.artista}</td>
        <td>${c.ventas.toLocaleString()}</td>
        <td style="font-weight:600;color:var(--admin-success)">${formatearMoneda(c.ingresos)}</td>
      </tr>
    `).join('');
  }

  // ============================================================
  // RENDER: ADMIN CLIENTES
  // ============================================================
  let clientesPage = 0;
  const clientesPerPage = 5;

  function renderAdminClientes() {
    renderFilterPaises();
    renderClientesTable();
    document.getElementById('search-clientes').addEventListener('input', () => {
      clientesPage = 0;
      renderClientesTable();
    });
    document.getElementById('filter-clientes-pais').addEventListener('change', () => {
      clientesPage = 0;
      renderClientesTable();
    });
  }

  function renderFilterPaises() {
    const select = document.getElementById('filter-clientes-pais');
    const paises = [...new Set(clientes.map(c => c.pais))];
    select.innerHTML = '<option value="all">Todos los países</option>' + paises.map(p => `<option value="${p}">${p}</option>`).join('');
  }

  function renderClientesTable() {
    const search = document.getElementById('search-clientes').value.toLowerCase();
    const pais = document.getElementById('filter-clientes-pais').value;
    let filtered = clientes.filter(c => {
      const matchName = c.nombre.toLowerCase().includes(search) || c.email.toLowerCase().includes(search);
      const matchPais = pais === 'all' || c.pais === pais;
      return matchName && matchPais;
    });

    const totalPages = Math.ceil(filtered.length / clientesPerPage);
    const start = clientesPage * clientesPerPage;
    const pageData = filtered.slice(start, start + clientesPerPage);

    const tbody = document.getElementById('clientes-table-body');
    tbody.innerHTML = pageData.map(c => `
      <tr>
        <td>${c.id}</td>
        <td>${c.avatar} ${c.nombre}</td>
        <td>${c.email}</td>
        <td>${c.pais}</td>
        <td>${new Date(c.fechaRegistro).toLocaleDateString('es-PE')}</td>
        <td style="font-weight:600;color:var(--admin-success)">${formatearMoneda(c.saldoGastado)}</td>
        <td>
          <button class="btn-table-action btn-edit" data-id="${c.id}">Editar</button>
          <button class="btn-table-action btn-delete" data-id="${c.id}">Eliminar</button>
        </td>
      </tr>
    `).join('') || '<tr><td colspan="7" style="text-align:center;padding:30px;color:var(--admin-texto-secundario)">No se encontraron clientes</td></tr>';

    tbody.querySelectorAll('.btn-edit').forEach(b => b.addEventListener('click', () => {
      mostrarToast('Editando cliente...', '✏️');
    }));
    tbody.querySelectorAll('.btn-delete').forEach(b => b.addEventListener('click', () => {
      mostrarToast('Cliente eliminado del sistema', '🗑️');
    }));

    renderPaginacion('clientes-pagination', clientesPage, totalPages, (page) => {
      clientesPage = page;
      renderClientesTable();
    });
  }

  // ============================================================
  // RENDER: ADMIN EMPLEADOS
  // ============================================================
  let empleadosPage = 0;
  const empleadosPerPage = 5;

  function renderAdminEmpleados() {
    renderFilterRoles();
    renderEmpleadosTable();
    document.getElementById('search-empleados').addEventListener('input', () => {
      empleadosPage = 0;
      renderEmpleadosTable();
    });
    document.getElementById('filter-empleados-rol').addEventListener('change', () => {
      empleadosPage = 0;
      renderEmpleadosTable();
    });
  }

  function renderFilterRoles() {
    const select = document.getElementById('filter-empleados-rol');
    const roles = [...new Set(empleados.map(e => e.rol))];
    select.innerHTML = '<option value="all">Todos los roles</option>' + roles.map(r => `<option value="${r}">${r}</option>`).join('');
  }

  function renderEmpleadosTable() {
    const search = document.getElementById('search-empleados').value.toLowerCase();
    const rol = document.getElementById('filter-empleados-rol').value;
    let filtered = empleados.filter(e => {
      const matchName = e.nombre.toLowerCase().includes(search) || e.email.toLowerCase().includes(search);
      const matchRol = rol === 'all' || e.rol === rol;
      return matchName && matchRol;
    });

    const totalPages = Math.ceil(filtered.length / empleadosPerPage);
    const start = empleadosPage * empleadosPerPage;
    const pageData = filtered.slice(start, start + empleadosPerPage);

    const tbody = document.getElementById('empleados-table-body');
    tbody.innerHTML = pageData.map(e => `
      <tr>
        <td>${e.id}</td>
        <td>${e.nombre}</td>
        <td>${e.email}</td>
        <td><span class="chip" style="background:rgba(59,130,246,0.15);border-color:var(--admin-primary);color:var(--admin-primary);font-size:12px">${e.rol}</span></td>
        <td>${e.pais}</td>
        <td style="font-weight:600">${formatearMoneda(e.salario)}</td>
        <td>${new Date(e.fechaContratacion).toLocaleDateString('es-PE')}</td>
        <td>
          <button class="btn-table-action btn-edit" data-id="${e.id}">Editar</button>
          <button class="btn-table-action btn-delete" data-id="${e.id}">Eliminar</button>
        </td>
      </tr>
    `).join('') || '<tr><td colspan="8" style="text-align:center;padding:30px;color:var(--admin-texto-secundario)">No se encontraron empleados</td></tr>';

    tbody.querySelectorAll('.btn-edit').forEach(b => b.addEventListener('click', () => {
      mostrarToast('Editando empleado...', '✏️');
    }));
    tbody.querySelectorAll('.btn-delete').forEach(b => b.addEventListener('click', () => {
      mostrarToast('Empleado eliminado del sistema', '🗑️');
    }));

    renderPaginacion('empleados-pagination', empleadosPage, totalPages, (page) => {
      empleadosPage = page;
      renderEmpleadosTable();
    });
  }

  // ============================================================
  // PAGINATION
  // ============================================================
  function renderPaginacion(containerId, currentPage, totalPages, onPageClick) {
    const container = document.getElementById(containerId);
    if (totalPages <= 1) { container.innerHTML = ''; return; }
    let html = '<button class="pagination-btn" data-page="prev" ' + (currentPage === 0 ? 'disabled' : '') + '>‹</button>';
    for (let i = 0; i < totalPages; i++) {
      html += `<button class="pagination-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i + 1}</button>`;
    }
    html += '<button class="pagination-btn" data-page="next" ' + (currentPage === totalPages - 1 ? 'disabled' : '') + '>›</button>';
    container.innerHTML = html;
    container.querySelectorAll('.pagination-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        let page = btn.dataset.page;
        if (page === 'prev') page = currentPage - 1;
        else if (page === 'next') page = currentPage + 1;
        else page = parseInt(page);
        if (page >= 0 && page < totalPages) onPageClick(page);
      });
    });
  }

  // ============================================================
  // RENDER: ADMIN REPORTES
  // ============================================================
  function renderAdminReportes() {
    renderChartLinea();
    renderRankingCanciones();
  }

  function renderChartLinea() {
    const container = document.getElementById('chart-ingresos-linea');
    const margin = { top: 20, right: 20, bottom: 30, left: 60 };
    const width = container.clientWidth || 800;
    const height = 250;
    const innerW = width - margin.left - margin.right;
    const innerH = height - margin.top - margin.bottom;

    const maxIngreso = Math.max(...ventasPorMes.map(v => v.ingresos));
    const minIngreso = Math.min(...ventasPorMes.map(v => v.ingresos));
    const range = maxIngreso - minIngreso || 1;

    const xStep = innerW / (ventasPorMes.length - 1);
    const points = ventasPorMes.map((v, i) => ({
      x: margin.left + i * xStep,
      y: margin.top + innerH - ((v.ingresos - minIngreso) / range) * innerH
    }));

    const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    const areaPath = linePath + ` L ${points[points.length - 1].x} ${margin.top + innerH} L ${points[0].x} ${margin.top + innerH} Z`;

    const yTicks = 5;
    let yLabels = '';
    for (let i = 0; i <= yTicks; i++) {
      const val = minIngreso + (range / yTicks) * i;
      const y = margin.top + innerH - ((val - minIngreso) / range) * innerH;
      yLabels += `
        <line x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}" stroke="rgba(255,255,255,0.06)" />
        <text x="${margin.left - 8}" y="${y + 4}" text-anchor="end" fill="var(--admin-texto-secundario)" font-size="10">S/. ${(val / 1000).toFixed(0)}k</text>
      `;
    }

    let xLabels = ventasPorMes.map((v, i) => `
      <text x="${points[i].x}" y="${margin.top + innerH + 18}" text-anchor="middle" fill="var(--admin-texto-secundario)" font-size="9">${v.mes.substring(0, 3)}</text>
    `).join('');

    container.innerHTML = `
      <svg class="line-chart-svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet">
        ${yLabels}
        ${xLabels}
        <path d="${areaPath}" fill="url(#gradArea)" opacity="0.2" />
        <defs>
          <linearGradient id="gradArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="var(--admin-primary)" />
            <stop offset="100%" stop-color="var(--admin-primary)" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path d="${linePath}" fill="none" stroke="var(--admin-primary)" stroke-width="2" />
        ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="var(--admin-primary)" stroke="var(--admin-fondo)" stroke-width="2" />`).join('')}
      </svg>
    `;
  }

  function renderRankingCanciones() {
    const tbody = document.getElementById('ranking-canciones-body');
    tbody.innerHTML = rankingCanciones.map((c, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><strong>${c.titulo}</strong></td>
        <td>${c.artista}</td>
        <td>${c.ventas.toLocaleString()}</td>
        <td style="font-weight:600;color:var(--admin-success)">${formatearMoneda(c.ingresos)}</td>
      </tr>
    `).join('');
  }

  // ============================================================
  // EVENT LISTENERS
  // ============================================================

  // Hash routing
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    if (hash.startsWith('admin/')) {
      if (sesionActual?.rol === 'admin') navegar(hash);
      else mostrarToast('Acceso restringido. Inicia sesión como administrador.', '🔒');
    } else if (hash.startsWith('album/')) {
      if (sesionActual?.rol === 'cliente') navegar(hash);
      else mostrarToast('Inicia sesión para ver el detalle del álbum.', '🔒');
    } else {
      if (sesionActual?.rol === 'cliente') navegar(hash);
      else navegar(hash);
    }
  });

  // Login form
  document.getElementById('form-login').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    login('cliente', email, password);
  });

  // Login tabs
  document.querySelectorAll('.login-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
      document.getElementById('form-' + tab.dataset.tab).classList.add('active');
    });
  });

  // Quick login buttons
  document.querySelectorAll('.btn-role').forEach(btn => {
    btn.addEventListener('click', () => {
      loginRapido(btn.dataset.role);
    });
  });

  // Logout
  document.getElementById('btn-logout-client').addEventListener('click', cerrarSesion);
  document.getElementById('btn-logout-admin').addEventListener('click', cerrarSesion);

  // Client nav links
  document.querySelectorAll('.client-nav .nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      if (view === 'client-dashboard') navegar('dashboard');
      else if (view === 'client-catalog') navegar('catalog');
      else if (view === 'client-playlists') navegar('playlists');
      else if (view === 'client-invoices') navegar('invoices');
    });
  });

  // Admin nav links
  document.querySelectorAll('.admin-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      navegar(view.replace('admin-', 'admin/'));
    });
  });

  // Album detail section links
  document.querySelectorAll('.section-link[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navegar('catalog');
    });
  });

  // Register form
  document.getElementById('form-register').addEventListener('submit', (e) => {
    e.preventDefault();
    mostrarToast('¡Cuenta creada exitosamente! Bienvenido a MusicStore 🎉', '🎵');
    document.querySelector('.login-tab[data-tab="login"]').click();
  });

  // ============================================================
  // INIT
  // ============================================================
  // Start at login
  document.querySelectorAll('.layout').forEach(l => l.classList.remove('active'));
  document.getElementById('view-login').classList.add('active');
});
