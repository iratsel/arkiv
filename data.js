/**
 * ARKIV — Central Data Store
 * All data is stored in localStorage and shared across pages.
 */

const ARKIV = (() => {

  // ── DEFAULT DATA ──────────────────────────────────────────────────────────

  const DEFAULT_SETTINGS = {
    siteName: "ARKIV",
    siteTagline: "Photography & Visual Design Studio",
    siteDescription: "ARKIV adalah studio fotografi dan desain visual berbasis di Indonesia. Kami mengabadikan momen, membangun identitas visual, dan menciptakan narasi lewat gambar.",
    siteUrl: "https://arkiv.vercel.app",
    siteEmail: "m@arkiv.studio",
    sitePhone: "+62 812 3456 7890",
    siteAddress: "Jl. Malioboro No. 1, Yogyakarta, Indonesia",
    siteInstagram: "@arkivstudio",
    siteBehance: "behance.net/arkiv",
    siteLinkedin: "linkedin.com/in/arkivstudio",
    logoText: "ARKIV",
    accentColor: "#FF3D00",
    defaultSeoTitle: "ARKIV — Photography & Visual Design Studio",
    defaultSeoDescription: "Studio fotografi dan desain visual profesional. Spesialis arsitektur, portrait, landscape, fashion, dan dokumentasi komersial.",
    defaultSeoKeywords: "fotografer profesional, desainer visual, studio foto indonesia, fotografi arsitektur, fotografi portrait, fotografi komersial",
    ogImage: "https://picsum.photos/seed/arkiv-og/1200/630",
    googleAnalyticsId: "",
    googleVerification: "",
    robotsTxt: "User-agent: *\nAllow: /\nDisallow: /cms/",
  };

  const DEFAULT_PORTFOLIOS = [
    {
      id: 1, slug: "urban-geometry",
      title: "Urban Geometry", category: "Architecture", year: "2025", client: "City Arts Project",
      description: "Eksplorasi garis dan bentuk arsitektur kota modern — menemukan pola tersembunyi di balik beton, kaca, dan baja yang membentuk lanskap urban kontemporer.",
      thumbnail: "https://picsum.photos/seed/arch1/600/800",
      featured: true, order: 1,
      seoTitle: "Urban Geometry — Fotografi Arsitektur | ARKIV",
      seoDescription: "Seri foto arsitektur yang mengeksplorasi geometri kota modern. Garis, bidang, dan bayangan sebagai bahasa visual.",
      seoKeywords: "fotografi arsitektur, urban photography, city architecture, geometric photography",
      media: [
        { type: "image", src: "https://picsum.photos/seed/arch1/1200/800", caption: "Main facade study" },
        { type: "image", src: "https://picsum.photos/seed/arch2/800/600", caption: "Interior geometry" },
        { type: "image", src: "https://picsum.photos/seed/arch3/800/600", caption: "Structural detail" },
      ]
    },
    {
      id: 2, slug: "moments-in-light",
      title: "Moments in Light", category: "Portrait", year: "2025", client: "Private Commission",
      description: "Serial potret yang menangkap pancaran cahaya emas sore hari pada wajah manusia — setiap gambar adalah puisi visual tentang kehadiran dan waktu.",
      thumbnail: "https://picsum.photos/seed/port1/600/900",
      featured: true, order: 2,
      seoTitle: "Moments in Light — Fotografi Portrait | ARKIV",
      seoDescription: "Seri portrait dengan cahaya emas sore hari. Memotret kehadiran dan waktu dalam setiap ekspresi manusia.",
      seoKeywords: "fotografi portrait, golden hour photography, portrait studio, foto wajah",
      media: [
        { type: "image", src: "https://picsum.photos/seed/port1/1200/800", caption: "Golden hour portrait" },
        { type: "image", src: "https://picsum.photos/seed/port2/800/600", caption: "Shadow study" },
      ]
    },
    {
      id: 3, slug: "silent-waters",
      title: "Silent Waters", category: "Landscape", year: "2024", client: "Nature Magazine",
      description: "Permukaan danau saat fajar — momen sebelum dunia bangun, ketika air dan langit berbicara dalam bahasa cermin dan kabut.",
      thumbnail: "https://picsum.photos/seed/land1/600/700",
      featured: true, order: 3,
      seoTitle: "Silent Waters — Fotografi Landscape | ARKIV",
      seoDescription: "Foto landscape danau saat fajar. Ketenangan air dan langit pagi dalam seri fotografi alam terbaik.",
      seoKeywords: "fotografi landscape, lake photography, nature photography, dawn photography",
      media: [
        { type: "image", src: "https://picsum.photos/seed/land1/1200/800", caption: "Dawn reflections" },
        { type: "image", src: "https://picsum.photos/seed/land2/800/600", caption: "Morning mist" },
        { type: "image", src: "https://picsum.photos/seed/land3/800/600", caption: "Stillness" },
      ]
    },
    {
      id: 4, slug: "streets-of-jakarta",
      title: "Streets of Jakarta", category: "Street", year: "2025", client: "Self-Initiated",
      description: "Kehidupan jalanan Jakarta dalam ritme yang konstan — pedagang, penumpang, bayangan dan sinar — potret sebuah kota yang tidak pernah tidur.",
      thumbnail: "https://picsum.photos/seed/street1/600/800",
      featured: false, order: 4,
      seoTitle: "Streets of Jakarta — Street Photography | ARKIV",
      seoDescription: "Dokumentasi visual kehidupan jalanan Jakarta. Ritme kota, manusia, dan cahaya dalam satu frame.",
      seoKeywords: "street photography jakarta, foto jalanan, dokumentasi urban, kehidupan kota",
      media: [
        { type: "image", src: "https://picsum.photos/seed/street1/1200/800", caption: "Rush hour" },
        { type: "image", src: "https://picsum.photos/seed/street2/800/600", caption: "Market stall" },
      ]
    },
    {
      id: 5, slug: "textile-and-form",
      title: "Textile & Form", category: "Fashion", year: "2025", client: "KAIN Studio",
      description: "Kampanye visual untuk koleksi tekstil premium — merayakan tekstur, lipatan, dan aliran kain dalam komposisi yang sculptural.",
      thumbnail: "https://picsum.photos/seed/fash1/600/900",
      featured: true, order: 5,
      seoTitle: "Textile & Form — Fashion Photography | ARKIV",
      seoDescription: "Kampanye foto fashion untuk koleksi tekstil premium. Tekstur, bentuk, dan gerakan kain dalam komposisi sculptural.",
      seoKeywords: "fashion photography, textile photography, kampanye fashion, foto produk fashion",
      media: [
        { type: "image", src: "https://picsum.photos/seed/fash1/1200/800", caption: "Fabric movement" },
        { type: "image", src: "https://picsum.photos/seed/fash2/800/600", caption: "Detail study" },
        { type: "image", src: "https://picsum.photos/seed/fash3/800/600", caption: "Full look" },
      ]
    },
    {
      id: 6, slug: "deep-blue",
      title: "Deep Blue", category: "Underwater", year: "2024", client: "Ocean Conservation",
      description: "Di bawah permukaan — dunia tanpa suara yang penuh warna dan kehidupan yang asing namun indah.",
      thumbnail: "https://picsum.photos/seed/ocean1/600/750",
      featured: false, order: 6,
      seoTitle: "Deep Blue — Underwater Photography | ARKIV",
      seoDescription: "Fotografi bawah air yang menampilkan keindahan dunia laut. Dokumentasi visual untuk konservasi ocean.",
      seoKeywords: "underwater photography, fotografi bawah air, ocean photography, coral reef",
      media: [
        { type: "image", src: "https://picsum.photos/seed/ocean1/1200/800", caption: "Coral garden" },
        { type: "image", src: "https://picsum.photos/seed/ocean2/800/600", caption: "Light rays" },
      ]
    },
    {
      id: 7, slug: "metal-and-fire",
      title: "Metal & Fire", category: "Industrial", year: "2024", client: "Foundry Collective",
      description: "Dokumentasi proses penempaan besi — api, tangan, dan logam dalam dialog yang menghasilkan objek dari kehendak manusia.",
      thumbnail: "https://picsum.photos/seed/indus1/600/800",
      featured: false, order: 7,
      seoTitle: "Metal & Fire — Industrial Photography | ARKIV",
      seoDescription: "Dokumentasi fotografi industri dan proses penempaan logam. Api, tangan, dan material dalam satu frame dramatis.",
      seoKeywords: "industrial photography, fotografi industri, foundry photography, metal work photo",
      media: [
        { type: "image", src: "https://picsum.photos/seed/indus1/1200/800", caption: "Molten metal" },
        { type: "image", src: "https://picsum.photos/seed/indus2/800/600", caption: "The forge" },
      ]
    },
    {
      id: 8, slug: "forest-breath",
      title: "Forest Breath", category: "Nature", year: "2025", client: "Green Atlas",
      description: "Hutan sebagai organisme tunggal — napas kolektif dari jutaan daun, akar yang saling terhubung, cahaya yang tersaring menjadi ritual.",
      thumbnail: "https://picsum.photos/seed/forest1/600/850",
      featured: true, order: 8,
      seoTitle: "Forest Breath — Nature Photography | ARKIV",
      seoDescription: "Seri fotografi alam hutan tropis. Cahaya, dedaunan, dan napas hutan dalam frame yang meditatif.",
      seoKeywords: "nature photography, forest photography, fotografi alam, hutan tropis indonesia",
      media: [
        { type: "image", src: "https://picsum.photos/seed/forest1/1200/800", caption: "Canopy light" },
        { type: "image", src: "https://picsum.photos/seed/forest2/800/600", caption: "Forest floor" },
        { type: "image", src: "https://picsum.photos/seed/forest3/800/600", caption: "Morning dew" },
      ]
    },
  ];

  const DEFAULT_PAGES = {
    about: {
      heroTitle: "Kami Mengabadikan\nDunia Lewat Lensa",
      heroSubtitle: "Studio fotografi dan desain visual yang percaya bahwa setiap frame adalah kesempatan untuk bercerita.",
      bioTitle: "Tentang ARKIV",
      bioText: "ARKIV lahir dari keyakinan sederhana: setiap momen memiliki keindahan yang menunggu untuk ditemukan. Berdiri sejak 2019 di Yogyakarta, kami telah bekerja bersama brand, institusi, dan individu dari seluruh Indonesia dan mancanegara.\n\nNama ARKIV terinspirasi dari kata 'arsip' — karena kami percaya fotografi adalah cara terbaik umat manusia mengarsipkan keindahan, emosi, dan kebenaran.",
      statsItems: [
        { number: "180+", label: "Proyek Selesai" },
        { number: "6", label: "Tahun Pengalaman" },
        { number: "12", label: "Penghargaan" },
        { number: "40+", label: "Klien Aktif" },
      ],
      teamMembers: [
        { name: "Rizky Aditya", role: "Founder & Lead Photographer", photo: "https://picsum.photos/seed/team1/400/400", bio: "Fotografer komersial dengan spesialisasi arsitektur dan portrait. Alumni Institut Seni Indonesia Yogyakarta." },
        { name: "Dian Pratiwi", role: "Creative Director", photo: "https://picsum.photos/seed/team2/400/400", bio: "Desainer visual dengan latar belakang seni rupa. Bertanggung jawab atas arah estetik setiap proyek." },
        { name: "Bagas Nugroho", role: "Videographer & Editor", photo: "https://picsum.photos/seed/team3/400/400", bio: "Spesialis video dan motion graphics. Membawa narasi hidup lewat gambar bergerak." },
      ],
      seoTitle: "Tentang ARKIV — Studio Fotografi & Desain Visual",
      seoDescription: "Kenali ARKIV, studio fotografi dan desain visual profesional dari Yogyakarta. Tim berpengalaman, visi artistik kuat, dan portofolio internasional.",
      seoKeywords: "tentang arkiv, studio fotografi yogyakarta, fotografer profesional indonesia, desain visual studio",
    },
    services: {
      heroTitle: "Layanan Kami",
      heroSubtitle: "Dari satu frame hingga kampanye visual penuh — kami hadir di setiap tahap.",
      services: [
        { icon: "camera", title: "Commercial Photography", desc: "Foto produk, editorial, dan kampanye brand yang membangun narasi visual kuat dan mendorong konversi.", price: "Mulai dari Rp 5.000.000" },
        { icon: "portrait", title: "Portrait & People", desc: "Potret individu, keluarga, tim perusahaan, dan talent. Natural, dramatis, atau editorial — sesuai kebutuhan.", price: "Mulai dari Rp 2.500.000" },
        { icon: "building", title: "Architecture & Interior", desc: "Dokumentasi bangunan, interior, dan properti untuk arsitek, developer, dan majalah desain.", price: "Mulai dari Rp 4.000.000" },
        { icon: "film", title: "Video Production", desc: "Video brand, dokumenter pendek, konten media sosial, dan motion graphics untuk platform digital.", price: "Mulai dari Rp 8.000.000" },
        { icon: "pen", title: "Visual Identity", desc: "Desain identitas visual: logo, panduan merek, sistem warna, dan tipografi yang membedakan brand Anda.", price: "Mulai dari Rp 6.000.000" },
        { icon: "star", title: "Event Documentation", desc: "Dokumentasi acara korporat, peluncuran produk, pameran seni, dan momen penting perusahaan.", price: "Mulai dari Rp 3.500.000" },
      ],
      process: [
        { step: "01", title: "Brief", desc: "Kami memulai dengan mendengarkan — visi, kebutuhan, dan tujuan proyek Anda." },
        { step: "02", title: "Konsep", desc: "Tim kami merancang moodboard, shot list, dan proposal kreatif yang selaras dengan brief." },
        { step: "03", title: "Eksekusi", desc: "Pemotretan atau produksi berjalan sesuai rencana dengan standar teknis tertinggi." },
        { step: "04", title: "Delivery", desc: "File final dikirim dalam format yang Anda butuhkan, tepat waktu dan melebihi ekspektasi." },
      ],
      seoTitle: "Layanan Fotografi & Desain Visual | ARKIV Studio",
      seoDescription: "Layanan fotografi komersial, portrait, arsitektur, video produksi, dan desain identitas visual profesional oleh ARKIV Studio.",
      seoKeywords: "jasa fotografi profesional, layanan desain visual, foto komersial, video produksi indonesia, jasa fotografi yogyakarta",
    },
    contact: {
      heroTitle: "Mari Bicara",
      heroSubtitle: "Ceritakan proyek Anda. Kami siap mendengarkan dan mewujudkannya.",
      formTitle: "Kirim Pesan",
      mapEmbed: "",
      seoTitle: "Kontak ARKIV — Studio Fotografi & Desain Visual",
      seoDescription: "Hubungi ARKIV Studio untuk konsultasi proyek fotografi dan desain visual. Email, telepon, atau kunjungi studio kami di Yogyakarta.",
      seoKeywords: "kontak arkiv, studio foto yogyakarta, hubungi fotografer, konsultasi fotografi",
    },
  };

  // ── STORAGE HELPERS ───────────────────────────────────────────────────────

  function get(key, def) {
    try {
      const raw = localStorage.getItem('arkiv_' + key);
      return raw ? JSON.parse(raw) : def;
    } catch { return def; }
  }

  function set(key, val) {
    try { localStorage.setItem('arkiv_' + key, JSON.stringify(val)); } catch (e) { console.warn('Storage error', e); }
  }

  function getSettings()    { return get('settings', DEFAULT_SETTINGS); }
  function setSettings(v)   { set('settings', v); }
  function getPortfolios()  { return get('portfolios', DEFAULT_PORTFOLIOS); }
  function setPortfolios(v) { set('portfolios', v); }
  function getPages()       { return get('pages', DEFAULT_PAGES); }
  function setPages(v)      { set('pages', v); }

  function getPortfolioBySlug(slug) {
    return getPortfolios().find(p => p.slug === slug) || null;
  }
  function getPortfolioById(id) {
    return getPortfolios().find(p => p.id === +id) || null;
  }

  function nextId() {
    const items = getPortfolios();
    return items.length ? Math.max(...items.map(p => p.id)) + 1 : 1;
  }

  function slugify(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  // ── SEO INJECTOR ──────────────────────────────────────────────────────────

  function injectSEO({ title, description, keywords, ogImage, canonical, type = 'website' }) {
    const s = getSettings();
    const t = title || s.defaultSeoTitle;
    const d = description || s.defaultSeoDescription;
    const k = keywords || s.defaultSeoKeywords;
    const img = ogImage || s.ogImage;
    const url = canonical || s.siteUrl;

    document.title = t;

    const meta = (name, content, prop = false) => {
      const attr = prop ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute('content', content);
    };

    meta('description', d);
    meta('keywords', k);
    meta('author', s.siteName);
    meta('robots', 'index, follow');

    // Open Graph
    meta('og:title', t, true);
    meta('og:description', d, true);
    meta('og:image', img, true);
    meta('og:url', url, true);
    meta('og:type', type, true);
    meta('og:site_name', s.siteName, true);

    // Twitter Card
    meta('twitter:card', 'summary_large_image');
    meta('twitter:title', t);
    meta('twitter:description', d);
    meta('twitter:image', img);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = url;

    // Structured Data
    const existing = document.querySelector('script[data-arkiv-ld]');
    if (existing) existing.remove();
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.setAttribute('data-arkiv-ld', '1');
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": type === 'article' ? 'Article' : 'WebPage',
      "name": t,
      "description": d,
      "url": url,
      "image": img,
      "publisher": {
        "@type": "Organization",
        "name": s.siteName,
        "url": s.siteUrl,
      }
    });
    document.head.appendChild(ld);
  }

  function injectOrganizationLD() {
    const s = getSettings();
    const existing = document.querySelector('script[data-arkiv-org]');
    if (existing) existing.remove();
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.setAttribute('data-arkiv-org', '1');
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": s.siteName,
      "description": s.siteDescription,
      "url": s.siteUrl,
      "email": s.siteEmail,
      "telephone": s.sitePhone,
      "address": { "@type": "PostalAddress", "streetAddress": s.siteAddress },
      "sameAs": [s.siteBehance, s.siteLinkedin].filter(Boolean),
    });
    document.head.appendChild(ld);
  }

  // ── SIDEBAR RENDERER ──────────────────────────────────────────────────────

  function renderSidebar(activePage) {
    const s = getSettings();
    const logoText = s.logoText || 'ARKIV';
    const half = Math.floor(logoText.length * 0.6);
    const logoA = logoText.slice(0, half);
    const logoB = logoText.slice(half);

    const nav = [
      { id: 'gallery', href: 'index.html', icon: `<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>`, label: 'Gallery' },
      { id: 'about',   href: 'about.html',    icon: `<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>`, label: 'About' },
      { id: 'services',href: 'services.html', icon: `<path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/>`, label: 'Services' },
      { id: 'contact', href: 'contact.html',  icon: `<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>`, label: 'Contact' },
    ];

    return `
    <nav id="sidebar">
      <div class="sidebar-logo" onclick="location.href='index.html'">${logoA}<span>${logoB}</span></div>
      <ul class="nav-links">
        ${nav.map(n => `
        <li>
          <a href="${n.href}" class="${n.id === activePage ? 'active' : ''}" data-page="${n.id}">
            <span class="nav-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${n.icon}</svg></span>
            <span class="nav-label">${n.label}</span>
          </a>
        </li>`).join('')}
      </ul>
      <div class="sidebar-bottom"><p>© ${new Date().getFullYear()} ${s.siteName}</p></div>
    </nav>`;
  }

  // ── SHARED CSS ────────────────────────────────────────────────────────────

  function getSharedCSS() {
    return `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=Space+Mono:wght@400;700&display=swap');
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --white: #FFFFFF; --black: #0A0A0A; --ink: #1A1A1A; --bone: #E8E2D9;
      --accent: #FF3D00; --sidebar-w: 72px; --sidebar-expanded: 260px;
    }
    html, body { width:100%; min-height:100%; background:var(--white); font-family:'DM Sans',sans-serif; color:var(--ink); }
    #sidebar {
      position:fixed; left:0; top:0; width:var(--sidebar-w); height:100vh;
      background:var(--black); z-index:100; display:flex; flex-direction:column;
      align-items:center; padding:28px 0;
      transition:width 0.5s cubic-bezier(0.16,1,0.3,1); overflow:hidden;
    }
    #sidebar:hover { width:var(--sidebar-expanded); }
    .sidebar-logo {
      font-family:'Bebas Neue',sans-serif; font-size:22px; letter-spacing:0.15em;
      color:var(--white); writing-mode:vertical-rl; text-orientation:mixed;
      transform:rotate(180deg); transition:all 0.5s cubic-bezier(0.16,1,0.3,1);
      white-space:nowrap; cursor:pointer; position:absolute; top:28px;
    }
    #sidebar:hover .sidebar-logo {
      writing-mode:horizontal-tb; transform:rotate(0deg); font-size:28px;
      letter-spacing:0.25em; top:32px; left:24px;
    }
    .sidebar-logo span { color:var(--accent); }
    .nav-links { list-style:none; margin-top:120px; width:100%; }
    .nav-links li { overflow:hidden; position:relative; }
    .nav-links a {
      display:flex; align-items:center; gap:16px; padding:14px 24px;
      color:rgba(255,255,255,0.45); text-decoration:none;
      font-family:'Space Mono',monospace; font-size:11px; letter-spacing:0.12em;
      text-transform:uppercase; white-space:nowrap;
      transition:color 0.3s, padding-left 0.4s cubic-bezier(0.16,1,0.3,1); position:relative;
    }
    .nav-links a::before {
      content:''; position:absolute; left:0; top:0; width:3px; height:100%;
      background:var(--accent); transform:scaleY(0);
      transition:transform 0.3s cubic-bezier(0.16,1,0.3,1);
    }
    .nav-links a:hover::before, .nav-links a.active::before { transform:scaleY(1); }
    .nav-links a:hover, .nav-links a.active { color:var(--white); padding-left:32px; }
    .nav-icon { width:20px; height:20px; flex-shrink:0; display:flex; align-items:center; justify-content:center; }
    .nav-icon svg { width:18px; height:18px; }
    .nav-label {
      opacity:0; transform:translateX(-10px);
      transition:opacity 0.4s 0.1s, transform 0.4s 0.1s cubic-bezier(0.16,1,0.3,1);
    }
    #sidebar:hover .nav-label { opacity:1; transform:translateX(0); }
    #sidebar:hover .nav-links a:hover .nav-label { font-size:13px; letter-spacing:0.2em; }
    .sidebar-bottom {
      margin-top:auto; padding:0 24px; width:100%; opacity:0; transform:translateY(10px);
      transition:opacity 0.4s 0.15s, transform 0.4s 0.15s;
    }
    #sidebar:hover .sidebar-bottom { opacity:1; transform:translateY(0); }
    .sidebar-bottom p { font-family:'Space Mono',monospace; font-size:9px; color:rgba(255,255,255,0.2); letter-spacing:0.1em; text-transform:uppercase; white-space:nowrap; }
    #sidebar::after {
      content:''; position:absolute; right:0; top:0; width:1px; height:0%;
      background:var(--accent); transition:height 0.6s cubic-bezier(0.16,1,0.3,1);
    }
    #sidebar:hover::after { height:100%; }
    #page-content { margin-left:var(--sidebar-w); min-height:100vh; transition:margin-left 0.5s cubic-bezier(0.16,1,0.3,1); }
    `;
  }

  return {
    getSettings, setSettings,
    getPortfolios, setPortfolios,
    getPages, setPages,
    getPortfolioBySlug, getPortfolioById,
    nextId, slugify,
    injectSEO, injectOrganizationLD,
    renderSidebar, getSharedCSS,
    DEFAULT_SETTINGS, DEFAULT_PORTFOLIOS, DEFAULT_PAGES,
  };
})();
