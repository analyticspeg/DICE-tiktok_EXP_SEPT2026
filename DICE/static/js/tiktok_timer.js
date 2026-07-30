document.addEventListener('DOMContentLoaded', function () {
    var seconds = (typeof js_vars !== 'undefined' && js_vars.view_duration) ? js_vars.view_duration : 180;

    // No submit button exists, but block a stray Enter-key submit too:
    document.querySelectorAll('form').forEach(function (f) {
        f.addEventListener('submit', function (e) { e.preventDefault(); });
    });

    setTimeout(function () {
        var ov = document.createElement('div');
        ov.setAttribute('style',
            'position:fixed;inset:0;z-index:100000;background:#fff;display:flex;flex-direction:column;' +
            'align-items:center;justify-content:center;text-align:center;padding:24px;');
        ov.innerHTML = '<h3 class="mb-2">Grazie!</h3>' +
            '<p class="text-muted">Il tempo di visione è scaduto.<br>Ti raccomandiamo ora di chiudere esclusivamente questa scheda e tornare al sondaggio.<br>NON chiudere il browser o altre schede.</p>';
        
        document.querySelectorAll('.video-player').forEach(function (v) {
            v.pause();
            v.muted = true;
        });
        
        document.body.appendChild(ov);
        document.body.style.overflow = 'hidden';   // freeze the feed underneath
        //window.close();                            // best-effort — see caveat
    }, seconds * 1000);
});
