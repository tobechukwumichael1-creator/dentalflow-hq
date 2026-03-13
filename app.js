/* ============================================================
   DentalFlow HQ — App Logic
   ============================================================ */

// ── Screen navigation ──────────────────────────────────────
function go(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    window.scrollTo(0, 0);
  }
}

// ── Tab switching inside dashboards ────────────────────────
function setTab(tabId, el) {
  // Find the dashboard this element belongs to
  const dash = el.closest('.dash');
  if (!dash) return;

  // Deactivate all tab panels in this dashboard
  dash.querySelectorAll('.tab-panel').forEach(t => t.classList.remove('active'));

  // Deactivate all sidebar items in this dashboard
  dash.querySelectorAll('.sidebar-item').forEach(i => i.classList.remove('active'));

  // Activate the target tab
  const tab = document.getElementById(tabId);
  if (tab) tab.classList.add('active');

  // Activate the clicked sidebar item
  el.classList.add('active');

  // Update topbar title
  const topbarTitle = dash.querySelector('.topbar-title');
  if (topbarTitle && el.dataset.title) {
    topbarTitle.textContent = el.dataset.title;
  }
}

// ── Professional type selector on login ────────────────────
const REGULATOR_HINTS = {
  MDCN:   'Regulated by the <strong>Medical and Dental Council of Nigeria (MDCN)</strong>',
  DTHRBN: 'Regulated by the <strong>Dental Therapists & Hygienists Registration Board of Nigeria (DTHRBN)</strong>',
  DTRBN:  'Regulated by the <strong>Dental Technologists Registration Board of Nigeria (DTRBN)</strong>'
};

function selectProfType(el, key) {
  document.querySelectorAll('.prof-chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  const hint = document.getElementById('reg-hint');
  if (hint) hint.innerHTML = REGULATOR_HINTS[key] || '';
}

// ── Smooth scroll to section (landing page) ────────────────
function scrollTo(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Init on page load ──────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Show landing screen by default
  const landing = document.getElementById('s-landing');
  if (landing) landing.classList.add('active');
});
