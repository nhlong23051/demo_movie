import { lazy } from 'react'

import { Route } from 'react-router-dom'

const routers = [
    // home
    {
        path: '',
        element: lazy(() => import('../pages/HomeTemplate')),
        nested: [
            { path: '', element: lazy(() => import('../pages/HomeTemplate/Home/index')) },
            { path: 'about', element: lazy(() => import('../pages/HomeTemplate/About/index')) },
            { path: 'list-movie', element: lazy(() => import('../pages/HomeTemplate/list-movie/index')) },
            { path: 'hook', element: lazy(() => import('../pages/HomeTemplate/HooksPage/index')) },
            { path: 'detail/:id', element: lazy(() => import('../pages/HomeTemplate/DetailMovie/index')) },
            { path: 'movie-seat', element: lazy(() => import('../pages/HomeTemplate/MovieSeat/index')) },
        ]
    },
    // admin
    {
        path: 'admin',
        element: lazy(() => import('../pages/AdminTemplate')),
        nested: [
            { path: 'dashboard', element: lazy(() => import('../pages/AdminTemplate/Dashboard/index')) },
            { path: 'add-user', element: lazy(() => import('../pages/AdminTemplate/Adduser/index')) },
        ]
    },
    {
        path: 'auth-page',
        element: lazy(() => import('../pages/AdminTemplate/AuthPage/index'))
    },

]

export const renderRoutes = () => {
    return routers.map((route) => {
        if (route.nested) {
            return <Route key={route.path} path={route.path} element={<route.element />}>
                {route.nested.map((item) => (<Route key={item.path} path={item.path} element={<item.element />} />))}
            </Route>
        } else {
            return <Route key={route.path} path={route.path} element={<route.element />} />
        }
    })
}