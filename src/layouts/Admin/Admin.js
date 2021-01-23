export default {
    name: 'AdminLayout',
    created() {
        let popper = document.createElement('script');
        popper.setAttribute('src', 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js');

        let bootstrapJs = document.createElement('script');
        bootstrapJs.setAttribute('src', 'https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js');
        
        let bootstrapCss = document.createElement('link');
        bootstrapCss.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
        bootstrapCss.setAttribute('rel', 'stylesheet');

        let fatherIconsJs = document.createElement('script');
        fatherIconsJs.setAttribute('src', 'https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js');

        document.head.appendChild(popper);
        document.head.appendChild(bootstrapJs);
        document.head.appendChild(bootstrapCss);
        document.head.appendChild(fatherIconsJs);
    }
}