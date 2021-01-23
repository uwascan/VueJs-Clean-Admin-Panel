// Import
import { createWebHistory, createRouter } from 'vue-router'
import publicRoutes from './PublicRoutes.js'
import privateRoutes from './PrivateRoutes.js'

// Combine multiple routes
var allRoutes = []
allRoutes = allRoutes.concat(publicRoutes, privateRoutes)
const routes = allRoutes

// Start vue router
const router = createRouter({
    history: createWebHistory(),
    routes
})

// Export
export default router