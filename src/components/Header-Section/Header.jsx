import s from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div>
        <nav>
          <a href="#">
            <span class="logo">Finance</span>Leger
          </a>
          <ul className={s.navigationList}>
            <li class="list navigation-list__item">
              <a href="#">Home</a>
            </li>
            <li class="list navigation-list__item">
              <a href="#">About</a>
            </li>
            <li class="list navigation-list__item">
              <a href="" class="navigation-list__link link">
                Cases
              </a>
            </li>
            <li class="list navigation-list__item">
              <a href="" class="navigation-list__link link">
                Blog
              </a>
            </li>
            <li class="list navigation-list__item">
              <a href="" class="navigation-list__link link">
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
