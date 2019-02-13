import React from 'react'
import { Link } from 'gatsby'
import '../Side-bar/side-bar.css'
import Menu from '../Board-Menu/menu'

const SideBarFr = ({ siteTitle }) => (
  <div className="sidebar-wrapper">
    <div className="community">
      <Menu />
      {/* <Menu /> */}
    </div>
    <h5 className="text_upper"> STATISTIQUES SUR LE MARCHÉ DU LOGEMENT</h5>
    <ul>
      <li>
        <a href="#">Indice des prix des propriétés MLS®</a>
      </li>
      <ul className="children">
        <li>
          <a href="#">À propos de l'IPP</a>
        </li>
        <li>
          <a href="#">Démarrer</a>
        </li>
        <li>
          <a href="#">Outil IPP</a>
        </li>
        <li>
          <a href="#">Les ressources</a>
        </li>
      </ul>
    </ul>

    <ul>
      <h5 className="text_upper">Statistiques nationales</h5>
      <ul className="children ntl_stats">
        <li>
          <a href="/fr-CA/stats/2WzwJAqfKd3QekqmJcKmli/">À propos de</a>
        </li>
        <li>
          <a href="/fr-CA/stats/3Yj8RUXHGUebU2k1UfYnqT/">Tendances emploi</a>
        </li>
        <li>
          <a href="/fr-CA/stats/ZtDiHSNyWRJYz57YMk7aX/">Taux d'intérêt</a>
        </li>
        <li>
          <a href="/fr-CA/stats/2k7dZil1MPa7B2vbqlNKlH/">
            Confiance des consommateurs
          </a>
        </li>
      </ul>
    </ul>
    <ul>
      <li>
        <a href="#">Prévisions trimestrielles</a>
      </li>
      <li>
        <a href="#">Carte du prix national</a>
      </li>
    </ul>
    <br />
    <div className="widgets widget_1">
      <h2>
        POURQUOI FAIRE APPEL AUX SERVICES D'UN COURTIER OU AGENT IMMOBILIER?
      </h2>
      <p>
        Que vous achetiez ou vendiez, une transaction immobilière peut être
        compliquée. Un courtier ou agent immobilier peut vous simplifier la
        vie...
        <a href="#">Informez-vous ›</a>
      </p>
    </div>
    <div className="widgets widget_2">
      <h2>COMMENT L’ACI PEUT VOUS AIDER</h2>
      <p>
        L’ACI procure des avantages aux propriétaires canadiens...
        <a href="#">Informez-vous ›</a>
      </p>
    </div>
    <div className="widgets widget_3">
      <h2>OBTENEZ DES RENSEIGNEMENTS ET STATISTIQUES</h2>
      <p>
        L’ACI compile et analyse plusieurs facteurs touchant le marché
        immobilier pour le public, les courtiers ou agents immobiliers et les
        gouvernements...
        <a href="#"> Informez-vous ›</a>
      </p>
    </div>
  </div>
)

export default SideBarFr
