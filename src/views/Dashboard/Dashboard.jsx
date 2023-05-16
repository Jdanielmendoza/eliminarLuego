import './Dashboard.css';
import ListItems from './ListItems/ListItems';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const viewProfile = () => {
        const avatar = document.querySelector('.dropdown');
        avatar.classList.toggle('dropdown--active');
    }
    const viewMenu = () => {
        const side = document.querySelector('.sidenav');
        const grid = document.querySelector('.grid');
        side.classList.toggle('sidenav--active');
        grid.classList.toggle('grid--noscroll');
    }
    const viewList = (classView) => {
        const side = document.querySelector('.sidenav');
        const grid = document.querySelector('.grid');
        side.classList.toggle('sidenav--active');
        grid.classList.toggle('grid--noscroll');
    }


    return (
        <div>
            <div className="grid">
                <header className="header">
                    <i className="fas fa-bars header__menu" onClick={() => viewMenu()} ></i>
                    <div className="header__search">
                        <input type='search' className="header__input" placeholder='Buscar cliente' />
                    </div>
                    <div className="header__avatar" onClick={() => viewProfile()}>
                        <div className="dropdown">
                            <ul className="dropdown__list">
                                <li className="dropdown__list-item">
                                    <span className="dropdown__icon"><i className="far fa-user"></i></span>
                                    <span className="dropdown__title">mi perfil</span>
                                </li>
                                <li className="dropdown__list-item">
                                    <span className="dropdown__icon"><i className="fas fa-clipboard-list"></i></span>
                                    <span className="dropdown__title">mi cuenta</span>
                                </li>
                                <li className="dropdown__list-item">
                                    <span className="dropdown__icon"><i className="fas fa-sign-out-alt"></i></span>
                                    <span className="dropdown__title"><Link to="/" >cerrar sesión</Link> </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>

                <aside className="sidenav">
                    <div className="sidenav__brand">
                        <i className="fas fa-feather-alt sidenav__brand-icon"></i>
                        <a className="sidenav__brand-link" href="#"><span className="text-light">Leon'Z</span></a>
                        <i className="fas fa-times sidenav__brand-close"></i>
                    </div>
                    <div className="sidenav__profile">
                        <div className="sidenav__profile-avatar"></div>
                        <div className="sidenav__profile-title text-light">Paola Zegarra</div>
                    </div>
                    <div className="row row--align-v-center row--align-h-center">
                        <ul className="navList">
                            <li className="navList__heading">Usuarios<i className="far fa-file-alt"></i></li>

                            <ListItems 
                                lista="cliente"
                                sublistas={[{ titulo: "registrar", link: "/reg" },
                                { titulo: "actualizar", link: "/upd" }]}>
                            </ListItems>

                            <ListItems 
                                lista="entrenadores"
                                sublistas={[{ titulo: "registrar", link: "/reg" },
                                { titulo: "actualizar", link: "/upd" }]}>
                            </ListItems>
                            

                            

                            <li className="navList__heading">Membresias<i className="far fa-envelope"></i></li>

                            <ListItems 
                                lista="registrar"
                                sublistas={[{ titulo: "lista1", link: "/reg" },
                                { titulo: "actualizar", link: "/upd" }]}>
                            </ListItems>

                            <li>
                                <div className="navList__subheading row row--align-v-center">
                                    <span className="navList__subheading-icon"><i className="fas fa-eye"></i></span>
                                    <span className="navList__subheading-title">unread</span>
                                </div>
                                <ul className="subList subList--hidden">
                                    <li className="subList__item">primary</li>
                                    <li className="subList__item">social</li>
                                    <li className="subList__item">promotional</li>
                                </ul>
                            </li>

                            <li>
                                <div className="navList__subheading row row--align-v-center">
                                    <span className="navList__subheading-icon"><i className="fas fa-book-open"></i></span>
                                    <span className="navList__subheading-title">archives</span>
                                </div>
                                <ul className="subList subList--hidden">
                                    <li className="subList__item">primary</li>
                                    <li className="subList__item">social</li>
                                    <li className="subList__item">promotional</li>
                                </ul>
                            </li>

                            <li className="navList__heading">Disciplinas<i className="far fa-image"></i></li>

                            <li>
                                <div className="navList__subheading row row--align-v-center">
                                    <span className="navList__subheading-icon"><i className="fas fa-mountain"></i></span>
                                    <span className="navList__subheading-title">vacation</span>
                                </div>
                                <ul className="subList subList--hidden">
                                    <li className="subList__item">cambodia</li>
                                    <li className="subList__item">new york</li>
                                </ul>
                            </li>

                            <li>
                                <div className="navList__subheading row row--align-v-center">
                                    <span className="navList__subheading-icon"><i className="fas fa-wine-glass-alt"></i></span>
                                    <span className="navList__subheading-title">anniversary</span>
                                </div>
                                <ul className="subList subList--hidden">
                                    <li className="subList__item">dive trip</li>
                                    <li className="subList__item">hikathon</li>
                                    <li className="subList__item">buffalo river</li>
                                </ul>
                            </li>

                            <li>
                                <div className="navList__subheading row row--align-v-center">
                                    <span className="navList__subheading-icon"><i className="fas fa-graduation-cap"></i></span>
                                    <span className="navList__subheading-title">university</span>
                                </div>
                                <ul className="subList subList--hidden">
                                    <li className="subList__item">wild horse saloon</li>
                                    <li className="subList__item">service corps</li>
                                    <li className="subList__item">graduation</li>
                                    <li className="subList__item">internships</li>
                                </ul>
                            </li>

                            <li className="navList__heading">Productos<i className="fas fa-chart-bar"></i></li>

                            <li>
                                <div className="navList__subheading row row--align-v-center">
                                    <span className="navList__subheading-icon"><i className="fas fa-credit-card"></i></span>
                                    <span className="navList__subheading-title">Bebidas</span>
                                </div>
                                <ul className="subList subList--hidden">
                                    <li className="subList__item">mortgage</li>
                                    <li className="subList__item">investments</li>
                                    <li className="subList__item">spend log</li>
                                    <li className="subList__item">owed</li>
                                </ul>
                            </li>

                            <li>
                                <div className="navList__subheading row row--align-v-center">
                                    <span className="navList__subheading-icon"><i className="fas fa-phone"></i></span>
                                    <span className="navList__subheading-title">Indumentaria</span>
                                </div>
                                <ul className="subList subList--hidden">
                                    <li className="subList__item">last month</li>
                                    <li className="subList__item">bi-weekly</li>
                                    <li className="subList__item">yesterday</li>
                                    <li className="subList__item">today</li>
                                </ul>
                            </li>


                            <li className="navList__heading">Reportes<i className="fas fa-calendar-alt"></i></li>

                            <li>
                                <div className="navList__subheading row row--align-v-center">
                                    <span className="navList__subheading-icon"><i className="fas fa-credit-card"></i></span>
                                    <span className="navList__subheading-title">Bebidas</span>
                                </div>
                                <ul className="subList subList--hidden">
                                    <li className="subList__item">mortgage</li>
                                    <li className="subList__item">investments</li>
                                    <li className="subList__item">spend log</li>
                                    <li className="subList__item">owed</li>
                                </ul>
                            </li>

                            <li>
                                <div className="navList__subheading row row--align-v-center">
                                    <span className="navList__subheading-icon"><i className="fas fa-phone"></i></span>
                                    <span className="navList__subheading-title">Indumentaria</span>
                                </div>
                                <ul className="subList subList--hidden">
                                    <li className="subList__item">last month</li>
                                    <li className="subList__item">bi-weekly</li>
                                    <li className="subList__item">yesterday</li>
                                    <li className="subList__item">today</li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </aside>

                <main className="main">
                    <div className="main-header">
                        <div className="main-header__intro-wrapper">
                            <div className="main-header__welcome">
                                <div className="main-header__welcome-title text-light">Bienvenida, <strong>Paola</strong></div>
                                <div className="main-header__welcome-subtitle text-light">hoy tienes </div>
                            </div>
                            <div className="quickview">
                                <div className="quickview__item">
                                    <div className="quickview__item-total">145</div>
                                    <div className="quickview__item-description">
                                        <i className="far fa-calendar-alt"></i>
                                        <span className="text-light">Activos</span>
                                    </div>
                                </div>
                                <div className="quickview__item">
                                    <div className="quickview__item-total">15</div>
                                    <div className="quickview__item-description">
                                        <i className="far fa-comment"></i>
                                        <span className="text-light">Vencidos</span>
                                    </div>
                                </div>
                                <div className="quickview__item">
                                    <div className="quickview__item-total">550</div>
                                    <div className="quickview__item-description">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <span className="text-light">inscritos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-overview">
                        <div className="overviewCard">
                            <div className="overviewCard-icon overviewCard-icon--document">
                                <i className="far fa-file-alt"></i>
                            </div>
                            <div className="overviewCard-description">
                                <h3 className="overviewCard-title text-light">New <strong>Document</strong></h3>
                                <p className="overviewCard-subtitle">Europe Trip</p>
                            </div>
                        </div>
                        <div className="overviewCard">
                            <div className="overviewCard-icon overviewCard-icon--calendar">
                                <i className="far fa-calendar-check"></i>
                            </div>
                            <div className="overviewCard-description">
                                <h3 className="overviewCard-title text-light">Upcoming <strong>Event</strong></h3>
                                <p className="overviewCard-subtitle">Chili Cookoff</p>
                            </div>
                        </div>
                        <div className="overviewCard">
                            <div className="overviewCard-icon overviewCard-icon--mail">
                                <i className="far fa-envelope"></i>
                            </div>
                            <div className="overviewCard-description">
                                <h3 className="overviewCard-title text-light">Recent <strong>Emails</strong></h3>
                                <p className="overviewCard-subtitle">+10</p>
                            </div>
                        </div>
                        <div className="overviewCard">
                            <div className="overviewCard-icon overviewCard-icon--photo">
                                <i className="far fa-file-image"></i>
                            </div>
                            <div className="overviewCard-description">
                                <h3 className="overviewCard-title text-light">New <strong>Album</strong></h3>
                                <p className="overviewCard-subtitle">House Concert</p>
                            </div>
                        </div>
                    </div>{/*  <!-- /.main__overview --> */}
                </main>

                <footer className="footer">
                    <p><span className="footer__copyright">&copy;</span>sistema de gimnasio</p>
                    <p>inscribite <i className="fas fa-heart footer__icon"></i> <a href="#" target="_blank" className="footer__signature">Lz</a></p>
                </footer>
            </div>
        </div>
    )


}
export default Dashboard