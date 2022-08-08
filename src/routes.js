import HomePage from "./pages/HomePage/HomePage"
import ConcatPage from "./pages/ConcatPage/ConcatPage"
import MovingPage from "./pages/Moving/MovingPage"
import PackingPage from "./pages/PackingPage/PackingPage"
import CartoonPage from "./pages/Cartoon/Cartoon"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"

const routes = [
    { path: "/concat", component: ConcatPage },
    { path: "/moving", component: MovingPage },
    { path: "/packing", component: PackingPage },
    { path: "/cartoon", component: CartoonPage },
    { path: "/", component: HomePage, exact: true },
    { component: NotFoundPage },
]

export default routes