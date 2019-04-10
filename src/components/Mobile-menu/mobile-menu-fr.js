import React from 'react'
import MenuFR from '../Board-Menu/menu'

const menu = {
  fontSize: '16px',
  textAlign: 'left',
  color: 'white',
}

export default ({ close }) => (
  <div className="menu burgerMenu">
    <div className="community">
      <MenuFR />
    </div>
    <ul style={menu}>
      <li onClick={close}>
        <a href="http://localhost:8000/fr-CA/stats/2WzwJAqfKd3QekqmJcKmli/">
          Accueil
        </a>
      </li>
      <li onClick={close}>
        <a href="http://localhost:8000/en-US/stats/2WzwJAqfKd3QekqmJcKmli/">
          À propos de
        </a>
      </li>
      <li onClick={close}>
        <a href="http://localhost:8000/en-US/stats/3Yj8RUXHGUebU2k1UfYnqT/">
          Tendances emploi
        </a>
      </li>
      <li onClick={close}>
        <a href="http://localhost:8000/en-US/stats/ZtDiHSNyWRJYz57YMk7aX/">
          Taux d'intérêt
        </a>
      </li>
      <li onClick={close}>
        <a href="http://localhost:8000/en-US/stats/2k7dZil1MPa7B2vbqlNKlH/">
          Confiance des consommateurs
        </a>
      </li>
      <hr />
      <li onClick={close}>
        <a href="https://www.crea.ca/fr/housing-market-stats/quarterly-forecasts/">
          Prévisions trimestrielles
        </a>
      </li>
      <li onClick={close}>
        <a href="https://www.crea.ca/fr/housing-market-stats/national-price-map/">
          Carte du prix national
        </a>
      </li>
      <hr />

      <li onClick={close}>
        <a href="https://www.crea.ca/fr/realtor-members/become-a-realtor/">
          Courtiers/agents membres
        </a>
      </li>
      <li onClick={close}>
        <a href="https://www.crea.ca/fr/buyers-or-sellers/crea-resources/">
          Achat ou vente
        </a>
      </li>
      <li onClick={close}>
        <a href="https://www.crea.ca/federal-affairs/creas-governmental-efforts/">
          Affaires fédérales
        </a>
      </li>
      <li onClick={close}>
        <a href="https://www.crea.ca/fr/housing-market-stats/">
          Stat. (marché résidentiel)
        </a>
      </li>
      <hr />
      <li onClick={close}>
        <a href="https://realtorlink.ca">Accès membre</a>
      </li>
      <li onClick={close}>
        <a href="https://www.crea.ca/newsroom/">Salle des nouvelles</a>
      </li>
      <li onClick={close}>
        <a href="https://www.crea.ca/about/careers/">Carrières</a>
      </li>
      <li onClick={close}>
        <a href="https://www.crea.ca/contact/">Pour nous joindre</a>
      </li>
      <li onClick={close}>
        <a href="http://localhost:8000/">EN</a>
      </li>
      <hr />
      <li onClick={close}>
        <a href="https://www.crea.ca/">ACI.CA</a>
      </li>
      <li onClick={close}>
        <a href="https://www.creacafe.ca/">CAFÉ ACI</a>
      </li>
      <li onClick={close}>
        <a href="https://www.realtorscare.ca/">
          REALTOR CARE<sup>®</sup>
        </a>
      </li>
    </ul>
  </div>
)
