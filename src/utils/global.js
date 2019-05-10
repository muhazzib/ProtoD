import { createGlobalStyle } from 'styled-components'
import AvenirLTStdHeavy from '../fonts/2FBBBA_1_0.ttf'
import AvenirLTStdBookOblique from '../fonts/2FBBBA_2_0.ttf'
import AvenirLTStdLight from '../fonts/2FBBBA_3_0.ttf'
import AvenirLTStdBook from '../fonts/2FBBBA_4_0.ttf'
import AvenirLTStdHeavyOblique from '../fonts/2FBBBA_5_0.ttf'

export const GlobalStyle = createGlobalStyle`

  
@font-face {
  font-family: 'AvenirLTStd-Light';
  src: url(${AvenirLTStdLight});

}
@font-face {
  font-family: 'AvenirLTStd-Heavy';
  src: url(${AvenirLTStdHeavy});

}
@font-face {
  font-family: 'AvenirLTStd-BookOblique';
  src: url(${AvenirLTStdBookOblique});

}
@font-face {
  font-family: 'AvenirLTStd-Book';
  src: url(${AvenirLTStdBook});

}
@font-face {
  font-family: 'AvenirLTStd-HeavyOblique';
  src: url(${AvenirLTStdHeavyOblique});

}

${
  '' /* }
@font-face {
  font-family: 'AvenirLTStd-Light';
  src: url('../fonts/2FBBBA_3_0.eot');
  src: url('../fonts/2FBBBA_3_0.eot?#iefix') format('embedded-opentype'),
    url('../fonts/2FBBBA_3_0.woff2') format('woff2'),
    url('../fonts/2FBBBA_3_0.woff') format('woff'),
    url('../fonts/2FBBBA_3_0.ttf') format('truetype');

}

{
  @font-face {
  font-family: 'AvenirLTStd-Heavy';
  src: url('../fonts/2FBBBA_1_0.eot');
  src: url('../fonts/2FBBBA_1_0.eot?#iefix') format('embedded-opentype'),
    url('../fonts/2FBBBA_1_0.woff2') format('woff2'),
    url('../fonts/2FBBBA_1_0.woff') format('woff'),
    url('../fonts/2FBBBA_1_0.ttf') format('truetype');
} 
}
@font-face {
  font-family: 'AvenirLTStd-BookOblique';
  src: url('../fonts/2FBBBA_2_0.eot');
  src: url('../fonts/2FBBBA_2_0.eot?#iefix') format('embedded-opentype'),
    url('../fonts/2FBBBA_2_0.woff2') format('woff2'),
    url('../fonts/2FBBBA_2_0.woff') format('woff'),
    url('../fonts/2FBBBA_2_0.ttf') format('truetype');
}

@font-face {
  font-family: 'AvenirLTStd-Book';
  src: url('../fonts/2FBBBA_4_0.eot');
  src: url('../fonts/2FBBBA_4_0.eot?#iefix') format('embedded-opentype'),
    url('../fonts/2FBBBA_4_0.woff2') format('woff2'),
    url('../fonts/2FBBBA_4_0.woff') format('woff'),
    url('../fonts/2FBBBA_4_0.ttf') format('truetype');
}
@font-face {
  font-family: 'AvenirLTStd-HeavyOblique';
  src: url('../fonts/2FBBBA_5_0.eot');
  src: url('../fonts/2FBBBA_5_0.eot?#iefix') format('embedded-opentype'),
    url('../fonts/2FBBBA_5_0.woff2') format('woff2'),
    url('../fonts/2FBBBA_5_0.woff') format('woff'),
    url('../fonts/2FBBBA_5_0.ttf') format('truetype');
} */
}


*/ body {
  color: #505050;
  line-height: 30px;
}

.alt-color {
  color: #345fa8;
}

h1 {
  text-transform: none;
}

h2 {
  padding: 10px 0;
}

h3 {
  font-family: AvenirLTStd-Heavy, Verdana, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  clear: both;
  font-family: 'AvenirLTStd-Book', Verdana, sans-serif !important;
  font-weight: normal;
}

/*   CREA STYLES */

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td {
  border: 0;
  font-family: inherit;
  font-size: 100%;
  font-style: inherit;
  font-weight: inherit;
  margin: 0;
  outline: 0;
  padding: 0;
  vertical-align: baseline;
}

html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  overflow-y: scroll;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

*,
*:before,
*:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

body {
  background: #ffffff;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

table {
  border-collapse: separate;
  border-spacing: 0;
}

caption,
th,
td {
  font-weight: normal;
  text-align: left;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
}

blockquote,
q {
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  quotes: none;
}

a:focus {
  outline: 2px solid #c1c1c1;
  outline: 2px solid rgba(51, 51, 51, 0.3);
}

a:hover,
a:active {
  outline: 0;
}

a img {
  border: 0;
}

.photo {
  border: 4px solid #efefef;
}

/**
 * 3.0 Typography
 */

body,
button,
input,
select,
textarea {
  color: #505050;
  font-family: 'AvenirLTStd-Light', Verdana, sans-serif;
  font-size: 16px;
  line-height: 30px;
  font-weight: normal;
}

h1 {
  font-size: 43px;
  line-height: 53px;
  color: #345fa8;
  margin-bottom: 20px;
  font-weight: normal;
}
h2 {
  font-size: 28px;
  line-height: 34px;
  color: #000000;
  font-weight: normal;
  margin-bottom: 10px;
}
h3 {
  font-size: 18px;
  line-height: 28px;
  text-transform: uppercase;
}
h4 {
  font-size: 20px;
  line-height: 30px;
  font-family: 'AvenirLTStd-Light', Verdana, sans-serif;
  font-weight: normal;
  margin-bottom: 25px;
}

h5 {
  font-size: 16px !important;
}
p {
  margin-bottom: 1.6em !important;
  font-family: 'AvenirLTStd-Light', Verdana, sans-serif;
  font-size: 16px;
  line-height: 30px;
  font-weight: normal;
}

b {
  font-family: 'AvenirLTStd-Heavy', Verdana, sans-serif;
  font-weight: normal;
  /* color: #345fa8; */
}

strong {
  font-family: 'AvenirLTStd-Heavy', Verdana, sans-serif;
  font-weight: normal;
}
dfn,
cite,
em,
i {
  font-style: normal;
  font-family: 'AvenirLTStd-BookOblique', Verdana, sans-serif;
}

blockquote {
  border-left: 4px solid #345fa8;
  font-size: 18px;
  font-family: 'Adelle-Light', Verdana, sans-serif;
  line-height: 28px;
  margin-bottom: 1.6667em;
  padding-left: 0.7778em;
}

blockquote p {
  margin-bottom: 1.6667em;
}

blockquote > p:last-child {
  margin-bottom: 0;
}

blockquote cite,
blockquote small {
  color: #333;
  font-size: 15px;
  font-size: 1.5rem;
  font-family: 'Adelle-Light', Verdana, sans-serif;
  line-height: 1.6;
}

blockquote em,
blockquote i,
blockquote cite {
  font-style: normal;
}

.content ul li p{
  margin-bottom: 0px !important;
}
.content strong{
  color: #345fa8;
}

/* new styles to be conformed */
.text_upper {
  text-transform: uppercase;
  font-family: 'AvenirLTStd-Heavy', Verdana, sans-serif !important;
}

.elemen {
  background: green;
}

.sidebar-wrapper {
  margin-bottom: 20px;
}

.sidebar-wrapper h5 {
  color: #345fa8;
}


${'Board table'}
.table td{
  padding: 0.4em !important;
}
.table th{
  padding: 0.4em !important;
}
.BoardTable tr:first-child{
  background: #E7EBFE !important;
  font-weight: bold;
}

.BoardTable td:first-child{
}


/** LIGHTBOX MARKUP **/

.lightbox {
	/** Default lightbox to hidden */
	display: none;

	/** Position and style */
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	text-align: center;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.8);
}

.lightbox img {
	/** Pad the lightbox image */
	max-width: 100%;
	max-height: 100%;
	margin-top: 0;
  padding-top:2%;
}

.lightbox:target {
	/** Remove default browser outline */
	outline: none;

	/** Unhide lightbox **/
	display: block;
}

.modal-dialog {
  max-width: 1079px !important;
}

.pres-photo{
  display:inline-table;
}

bluebold {
  color: #345fa8;
  font-weight:600
}

/** Media Queries **/
@media only screen and (min-width: 900px) {

 }


/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
/* Styles */
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width : 321px) {
/* Styles */
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width : 320px) {
/* Styles */
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) {
/* Styles */
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) {
/* Styles */
}
/**********
iPad 3
**********/
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */
}
/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1224px) {
/* Styles */
.burger-menu{
  display:none;
}

}

/* Large screens ----------- */
@media only screen  and (min-width : 1824px) {
/* Styles */

.burger-menu{
  display:none;
}
}

/* iPhone 4 ----------- */
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : landscape) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */

}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) and (orientation : portrait) and (-webkit-min-device-pixel-ratio : 2) {
/* Styles */

}

/* iPhone 5 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.custom-row {
    margin-right: 5px !important;
    margin-left: 5px !important;
  }
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.chart{
  display: none;
}
.side-content {
    display: none;
  }
  .boardSheets{
    display: none;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.breadcrumbs {
    display: none;
  }

.sheet{
  display:none;
}
.side-content {
    display: none;
  }

}

/* iPhone 6, 7, 8 ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.chart{
  display: none;
}
.side-content {
    display: none;
  }


  a{
    color: white !important
  }
}

@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

/* iPhone 6+, 7+, 8+ ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

/* iPhone X ----------- */
@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

@media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

/* iPhone XS Max, XR ----------- */
@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

@media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

/* Samsung Galaxy S3 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 2){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

/* Samsung Galaxy S4 ----------- */
@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

/* Samsung Galaxy S5 ----------- */
@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : landscape) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}

@media only screen and (min-device-width: 360px) and (max-device-height: 640px) and (orientation : portrait) and (-webkit-device-pixel-ratio: 3){
/* Styles */
.breadcrumbs {
    display: none;
  }
.sheet{
  display:none;
}
.side-content {
    display: none;
  }
}







`
export default GlobalStyle
