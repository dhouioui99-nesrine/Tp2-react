import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from
'react-router-dom';
import Home from './components/Home';
import TodoList from './components/Todolist';

function App() {
  return (
  <Router>
  <div>
  <nav>
  <ul>
  <li>
  <Link to="/">Home</Link>
  </li>
  <li>
  <Link to="/todos">Todo List</Link>
  </li>
  </ul>
  </nav>
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/todos" element={<TodoList />} />
  </Routes>
  </div>
  </Router>
  );
  }
  export default App;
  