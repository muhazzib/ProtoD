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
  text-transform: uppercase;
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

`
export default GlobalStyle
