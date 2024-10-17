# Vefforritun 1, 2024: Verkefni 7, JS #1

- [Vefforritun 1, 2024, fyrirlestur 8.4: Verkefni 7](https://www.youtube.com/watch?v=vpFY_TrU_LY)
- [Vefforritun 1, 2024, fyrirlestur 9.1: Meira um verkefni 7](https://www.youtube.com/watch?v=NxU6MWE5quk)
- [Vefforritun 1, 2024, fyrirlestur 9.2: Verkefni 7 og Netlify](https://www.youtube.com/watch?v=hKB-L_BJ6aE)

## Markmið

- Búa til JavaScript forrit sem notar föll, flæðistýringar og ítranir.
- Nota strengi og tölur í JavaScript.
- Nota fylki og hluti í JavaScript.

## Grunnur

Gefinn er grunnur að verkefni:

- `package.json` með:
  - skilgreindum dependency-ium: `browser-sync`, `concurrently` og `cpy-cli`.
  - NPM scripts sem keyra upp „dev“ og „build“.
- `package-lock.json` skrá sem skilgreinir nákvæmlega hvaða dependency eru notuð _fyrir_ dependency-in okkar
- `index.html` með leiðbeiningum og tengingu við `scripts.js`.
- `.gitignore` sem passar upp á að `node_modules` mappan sé ekki geymd í git.
- `scripts.js` með grunni að forriti, athugasemdir og tillögur að útfærslum eru í skjalinu.

Skjölun á nokkrum föllum og breytum sem notar [`jsdoc`](https://jsdoc.app/).

### NPM

Til að byrja að vinna verkefnið þarf að sækja það frá GitHub og keyra NPM:

```bash
# Inni í möppu sem á að geyma verkefnið
git clone https://github.com/vefforritun/vef1-2024-v7.git
# eða
git clone git@github.com:vefforritun/vef1-2024-v7.git

# Förum inn í möppu
cd vef1-2024-v7

# Sækjum öll dependency með NPM
npm install

# Keyrum NPM script fyrir development
npm run dev
```

Áður en skilað er þarf að breyta remote í þitt eigið repo:

```bash
git remote remove origin
git remote add origin <slóð á þitt GitHub repo>
```

## Virkni

Setja upp virkni sem greinir strengi og gefur ýmsar upplýsingar um þá. Notkun á forritinu er í gegnum `console` í vafra, sjá lýsingu í `index.html`, en útfæra skal gefin föll (sjá nánar í athugasemdum) í `scripts.js`:

- `longest(str)`
  - Skilar lengsta orðinu í `str`.
  - Ekki þarf að fjarlægja bil, tölustafi eða önnur tákn.
  - Orð eru aðskilin með bilum.
  - Greinarmerki er partur af orðinu, t.d. ætti `longest('halló heimur!')` að skila `heimur!`.
  - Skilar fyrsta orðinu ef annað/önnur jafn löng finnast.
  - Ef `str` er tómur strengur skal skila tómum streng.
  - Ef `str` er ekki strengur skal skila `null`.
- `shortest(str)`
  - Eins og `longest` nema skilar stysta orðinu í `str`.
- `reverse(str)`
  - Skilar `str` í öfugri röð.
  - Ef `str` er ekki strengur skal skila `null`.
  - Ef `str` er tómur strengur skal skila tómum streng.
- `vowels(str)`
  - Skilar fjölda sérhljóða í `str`.
  - Ef engir sérhljóðar eða ekki strengur skal skila `0`.
  - Sérhljóðar eru allir íslenskir sérhljóðar: `a, e, i, o, u, y, á, é, ý, ú, í, ó, ö, æ`.
- `consonants(str)`
  - Skilar fjölda samhljóða í `str`.
  - Ef engir samhljóðar eða ekki strengur skal skila `0`.
  - Samhljóða eru allir íslenskir samhljóðar: `b, d, ð, f, g, h, j, k, l, m, n, p, r, s, t, v, x, þ`.
- `palindrome(str)`
  - Samhverfur strengur er lesin eins frá vinstri til hægri og hægri til vinstri.
  - Skilar `true` ef `str` er samhverfur (palindrome), annars `false`.
  - Skilar `false` ef `str` er ekki strengur.
  - Ekki skiptir máli hvort stafir séu hástafir eða lágstafir.
  - Ekki þarf að fjarlægja bil, tölustafi eða önnur tákn.
  - Tómur strengur er ekki samhverfur.

Í `scripts.js` er merkt það sem þarf að útfæra með athugasemdum.

Fyrir inntak og til að birta notendum gögn skal nota `alert` `confirm` og `prompt` föllin ásamt `console` hlutinn til að birta upplýsingar með `console.info()` og `console.error()`.

### Hjálparföll

Í öllum tilfellum skal nota gefin hjálparföll. Sjá nánar í skjölun `scripts.js`.

Fyrir útfærslu á svipaðri virkni ætti að skoða að útbúa hjálparföll.

### Leiðbeint ferli

Í `scripts.js` skal útfæra fallið `start()`. Það skal:

- Birta leiðbeiningar með `alert` um hvernig forritið er notað.
- Biðja um inntak (streng) með `prompt`.
- Ef löglegt inntak og ekki ýtt á „cancel“ skal kalla á `longest`, `shortest`, `reverse`, `vowels`, `consonants` og `palindrome` föllin.
- Birta niðurstöður í `alert` með upplýsingum um hvað kom út úr hverju kalli, hver niðurstaða i nýjum streng.
- Ef „cancel“ eða tómi strengur, ekki gera neitt.
- Eftir að niðurstöður hafa verið birt skal bjóða notanda að gera aftur eða hætta.

### Prófanir

Fyrir hvert af föllunum, fyrir utan `start`, skal skilgreina a.m.k. tvö próf með `console.assert()` sem sýna að fallið virki rétt. Prófin skulu vera skilgreind í `scripts.js`. Sjá dæmi í `scripts.js`.

## Netlify

Skila skal verkefninu keyrandi á Netlify. Gefið er `build` script í `package.json` og nota build ferli þ.a. mappa sem verður til í `build` ferli sé notuð fyrir vef. Þetta verður til þess að þau gögn sem eru i möppu og eru ekki fyrir almenning (t.d. `package.json`) eru ekki birt, heldur aðeins:

- `index.html`
- `scripts.js`

## Mat

- 10% Verkefni sett upp GitHub og á Netlify og `build` scripta notuð.
- 40% Föll útfærð og virka.
- 10% Hjálparföll notuð.
- 20% Leiðbeint ferli útfært gegnum `start` fallið.
- 20% Prófanir á föllum.

## Sett fyrir

Verkefni sett fyrir mánudaginn 7. október 2024.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags fimmtudaginn 17. október 2024.

Skilaboð skulu innihalda:

- Slóð á verkefnið keyrandi í hýsingu
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `digitalsigga`
  - `ofurtumi`
  - `osk`
  - `polarparsnip`
  - `reynirjr`

Skila má eins oft og þið viljið þar til skilafrestur rennur út.

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ef stórt mállíkan (LLM, „gervigreind“, t.d. ChatGTP) er notað til að skrifa part af lausn skal taka það fram. [Sjá nánar á upplýsingasíða um gervigreind hjá HÍ](https://gervigreind.hi.is/).

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

> Útgáfa 0.1
# v7
