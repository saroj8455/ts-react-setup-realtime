import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Default from './components/Default';
import Layout from './layout/Layout';
import ErrorPage from './pages/ErrorPage';
// function App() {
//   return (
//     <>
//       <Default />
//     </>
//   );
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Default />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
