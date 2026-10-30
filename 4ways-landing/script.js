(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* ---------- Data from the company profile ---------- */
  const team = [
    { slug: 'abdullah-alobaid', name: 'د. عبدالله العبيّد', role: 'الرئيس التنفيذي', title: 'أخصائي إكلينيكي' },
    { slug: 'riyadh-binhuwaymil', name: 'رياض بن هويمل', role: 'المدير العام', title: 'أخصائي أول علاج طبيعي' },
    { slug: 'mishari-alhindi', name: 'مشاري الهندي', role: 'المدير الطبي', title: 'أخصائي أول علاج طبيعي' },
    { slug: 'wed-alkharji', name: 'ود الخرجي', title: 'أخصائية إكلينيكية', f: true },
    { slug: 'abdullah-alrashoud', name: 'عبدالله الرشود', title: 'أخصائي أول علاج طبيعي' },
    { slug: 'ahmed-aleisa', name: 'أحمد العيسى', title: 'أخصائي أول علاج طبيعي' },
    { slug: 'nada-aldawood', name: 'ندى الداود', title: 'أخصائية أول علاج طبيعي', f: true },
    { slug: 'sami-alharbi', name: 'سامي الحربي', title: 'أخصائي علاج طبيعي' },
    { slug: 'wasaif-almazyad', name: 'وصايف المزيد', title: 'أخصائية علاج طبيعي', f: true },
    { slug: 'shahad-alammar', name: 'شهد العمار', title: 'أخصائية أول علاج طبيعي', f: true },
    { slug: 'nawaf-alsharif', name: 'نواف الشريف', title: 'أخصائي علاج طبيعي' },
    { slug: 'mishal-alhoti', name: 'مشعل الحوطي', title: 'أخصائي أول علاج طبيعي' },
    { slug: 'alanoud-aldowaish', name: 'العنود الدويش', title: 'أخصائية صحة المرأة', f: true },
    { slug: 'rakaf-alrakaf', name: 'ركف الركف', title: 'أخصائي أول علاج طبيعي' },
    { slug: 'suhad-almutairi', name: 'سهاد المطيري', title: 'أخصائية علاج طبيعي', f: true },
    { slug: 'sarah-alotaibi', name: 'سارة العتيبي', title: 'أخصائية علاج طبيعي', f: true },
    { slug: 'mohammed-alshayeb', name: 'محمد الشايب', title: 'أخصائي أول علاج طبيعي' },
    { slug: 'rayan-allifan', name: 'ريان الليفان', title: 'أخصائي إكلينيكي' },
    { slug: 'razan-alqahtani', name: 'رزان القحطاني', title: 'أخصائية علاج طبيعي', f: true },
    { slug: 'basma-aldowaish', name: 'بسمة الدويش', title: 'أخصائية علاج طبيعي', f: true },
    { slug: 'waad-alotaibi', name: 'وعد العتيبي', title: 'دكتورة علاج طبيعي · مدربة بيلاتس', f: true },
    { slug: 'rima-alshunaifi', name: 'ريما الشنيفي', title: 'أخصائية أول علاج طبيعي', f: true },
    { slug: 'awad-alahmari', name: 'عواض الأحمري', title: 'أخصائي علاج طبيعي' },
    { slug: 'nawaf-almutlab', name: 'نواف المطلب', title: 'أخصائي علاج طبيعي' },
    { slug: 'mohammed-alotaibi', name: 'محمد العتيبي', title: 'أخصائي علاج طبيعي' },
    { slug: 'abdulilah-almalki', name: 'عبدالإله المالكي', title: 'أخصائي علاج طبيعي', noPhoto: true },
  ];

  const partners = [
    'مستشفى الملك عبدالله بن عبدالعزيز الجامعي', 'شريك نجاح', 'الهيئة الملكية لمدينة الرياض', 'مركز الملك عبدالله المالي KAFD',
    'شريك نجاح', 'الصحة القابضة', 'صلة Sela', 'الهيئة العامة للغذاء والدواء', 'سرج للاستثمار الرياضي', 'وزارة التعليم',
    'Optimo', 'Hwadi', 'سواني Sawani', 'شريك نجاح', 'نادي الرائد', 'نادي الحزم', 'إكسبرو EXPRO', 'Saudi Padel',
  ];

  /* ---------- Render team ---------- */
  const teamGrid = $('#team-grid');
  teamGrid.innerHTML = team.map(m => `
    <article class="member reveal${m.f ? ' f' : ''}">
      <div class="member-photo">
        ${m.noPhoto
          ? `<span class="placeholder">${m.name.trim()[0]}</span>`
          : `<img src="assets/team/${m.slug}.jpg" alt="${m.name}" loading="lazy" width="76" height="76">`}
      </div>
      <div>
        <h3>${m.name}</h3>
        ${m.role ? `<p class="role">${m.role}</p>` : ''}
        <p>${m.title}</p>
      </div>
    </article>`).join('');

  /* ---------- Render partners ---------- */
  $('#partners-grid').innerHTML = partners.map((name, i) => `
    <div class="partner" title="${name}">
      <img src="assets/partners/p${String(i + 1).padStart(2, '0')}.png" alt="${name}" loading="lazy">
    </div>`).join('');

  /* ---------- Header ---------- */
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const nav = $('#main-nav');
  const toggle = $('.nav-toggle');
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
  $$('a', nav).forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Conditions tabs ---------- */
  const tabs = $$('[role="tab"]');
  const selectTab = tab => {
    tabs.forEach(t => {
      const active = t === tab;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', active);
      t.tabIndex = active ? 0 : -1;
      $('#' + t.getAttribute('aria-controls')).hidden = !active;
    });
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', e => {
      // RTL: ArrowLeft moves forward
      const dir = e.key === 'ArrowLeft' ? 1 : e.key === 'ArrowRight' ? -1 : 0;
      if (!dir) return;
      const next = tabs[(i + dir + tabs.length) % tabs.length];
      next.focus();
      selectTab(next);
    });
  });

  /* ---------- Booking form ---------- */
  const form = $('#booking-form');
  const success = $('#form-success');
  const dateInput = $('#f-date');
  const serviceSelect = $('#f-service');
  const phoneInput = $('#f-phone');

  const today = new Date();
  const iso = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  dateInput.min = iso(today);

  // Service cards preselect the service in the form
  $$('[data-service]').forEach(card => card.addEventListener('click', () => {
    serviceSelect.value = card.dataset.service;
  }));

  // Digits only (also converts Arabic-Indic digits)
  phoneInput.addEventListener('input', () => {
    phoneInput.value = phoneInput.value
      .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
      .replace(/\D/g, '')
      .slice(0, 10);
  });

  const setError = (input, msg) => {
    const field = input.closest('.field');
    field.classList.toggle('has-error', !!msg);
    $('.err', field).textContent = msg || '';
    input.setAttribute('aria-invalid', !!msg);
  };

  const validators = {
    name: v => v.trim().length < 3 ? 'فضلاً اكتب الاسم الكامل' : '',
    phone: v => !/^05\d{8}$/.test(v) ? 'رقم الجوال يجب أن يبدأ بـ 05 ويتكون من 10 أرقام' : '',
    service: v => !v ? 'اختر الخدمة' : '',
    date: v => !v ? 'اختر التاريخ المفضل' : (v < dateInput.min ? 'اختر تاريخاً من اليوم فصاعداً' : ''),
  };

  Object.keys(validators).forEach(name => {
    const input = form.elements[name];
    input.addEventListener('blur', () => setError(input, validators[name](input.value)));
    input.addEventListener('input', () => {
      if (input.closest('.field').classList.contains('has-error')) setError(input, validators[name](input.value));
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    let firstInvalid = null;
    Object.entries(validators).forEach(([name, check]) => {
      const input = form.elements[name];
      const msg = check(input.value);
      setError(input, msg);
      if (msg && !firstInvalid) firstInvalid = input;
    });
    if (firstInvalid) { firstInvalid.focus(); return; }

    const data = Object.fromEntries(new FormData(form));
    const btn = $('.submit-btn', form);
    btn.classList.add('is-loading');
    $('span', btn).textContent = 'جارٍ الإرسال…';

    // Front-end only: simulate a request, no data leaves the page.
    setTimeout(() => {
      btn.classList.remove('is-loading');
      $('span', btn).textContent = 'أرسل طلب الحجز';
      const first = data.name.trim().split(/\s+/)[0];
      $('#success-text').textContent =
        `شكراً ${first}، استلمنا طلب حجز «${data.service}» بتاريخ ${data.date}. سيتواصل معك فريقنا على ${data.phone} لتأكيد الموعد.`;
      form.hidden = true;
      success.hidden = false;
    }, 700);
  });

  $('#new-request').addEventListener('click', () => {
    form.reset();
    success.hidden = true;
    form.hidden = false;
  });

  $('#year').textContent = today.getFullYear();
})();
