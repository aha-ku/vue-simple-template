import Layout from './layout'

export default {
    install(app) {
        app.component(Layout.name, Layout)
    },
    Layout,
}