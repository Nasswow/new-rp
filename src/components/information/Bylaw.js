import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { Link } from 'react-router-dom';
import './Bylaw.css';
import PDFDocument from '../document/PDFDocument';
const Bylaw = () => {
    const scrollTop = () => {
        window.scroll(0, 0)
    }
    const scrollBottom = () => {
        window.scrollTo(0, 100000)
    }
    return (
        <div className='bylaw-container'>
            <div onClick={scrollTop} className='scroll-top'>Scroll to Top</div>
            <div onClick={scrollBottom} className='scroll-bottom'>Scroll to Bottom</div>

            <div className='bylaw'>
                <div className='first-page'>
                    <h1>---የኢትዮጵያውያን ትራንዚት ሠራተኞች ማኅበር---<br /><br />
                ETHIOPIAN TRANSIT EMPLOYEES ASSOCIATION<br /><br />
                በኪንግ ካውንቲ ሜትሮ/In King County Metro መተዳደሪያ ደንብ /BYLAW/<br /><br />
                ለ 4ተኛ ጊዜ የተሻሻለው REVISED 4TH EDITION<br /><br />
                JULY, 2020</h1>
                    <h5>የታሪክ ማስታወሻ<br /><br />
                ይህ ማኅበር እ.አ.አ 2010 ዓ.ም በኪንግ ካውንቲ ሜትሮ ተቀጥረው ይሠሩ ከነበሩ ጥቂት ኢትዮጵያውያን መካከል ከዚህ በታች ስማቸው በተጠቀሰው ወንድሞች ቀና አመለካከት እንዲሁም በኢትዮጵያዊነት የመረዳዳትና የትብብር መንፈስ በሲያትል ዋሽንግተን አሜሪካ ተጠነሰሰ፡፡<br />
                1/ አብዩ 2/ አቢይ ጸጋ 3/ ብሩክ 4/ ዳንኤል 5/ ኤርምያስ 6/ ኃይሉ 7/ ተስፋዬ 8/ ጸጋ 9/ ያሬድ</h5>
                </div>
                <hr />

                <h1>አንቀጽ 1. መግቢያ</h1>
                <h3>እኛ ከአንድ ሀገር “ኢትዮጵያ” የመጣን እና ከትውልደ ኢትዮጵያውያን ቤተሰቦች የተወለድን የኪንግ ካዉንቲ ሜትሮ ትራንዚት ሠራተኞች አባሎቻችን በአመራር አና በተለያዩ የሥራ ዘርፎች እንዲሳተፉ ለማበረታታት፤ በተሳሳተ አመለካከት በማንነታችን ዙሪያ አልፎ አልፎ የሚታዩትና የምንሰማቸውን የዘር መድሎና አስተዳደራዊ በደልን በጋራ ለመከላከል፤ ለብዙዎቻችን እንግሊዘኛ ሁለተኛ ቋንቋችን እንደመሆኑ መጠን በሙያችንና በሥራችን ባሉ ጉዳዮች እና ሊገጥሙ በሚችሉ ችግሮች ዙሪያ ለመደጋገፍና ለመተባበር በመሰባሰብ በሃይማኖት፣ በዘር፣ በቋንቋ፣ በፖለቲካ የአመለካከት ልዩነቶች ሳንገደብና ፍጹም ከዚህ ነጻ በሆነ የአንድነት መንፈስ ይህንን ማኅበር መሥርተናል።</h3>
                <h1>አንቀጽ 2. የማኅበሩ ስም</h1>
                <h3>ማኅበሩ “የኢትዮጵያዊያን ትራንዚት ሠራተኞች ማኅበር - በኪንግ ካውንቲ ሜትሮ” ወይም Ethiopian Transit Employees Association - In King County Metro (ETEA) ይባላል።</h3>
                <h1>አንቀጽ 3. አድራሻ</h1>
                <h3>የማኅበሩ አድራሻ ፖ.ሳ.ቁ ሲያትል ዋሽንግተን አሜሪካ ይሆናል።</h3>
                <h1>አንቀጽ 4. ትርጉም</h1>
                <h3>የቃሉ አገባብ ሌላ ትርጉም የሚያሰጠው ካልሆነ በስተቀር በዚህ መተዳደሪያ ደንብ ውስጥ፦
                <br />1/  ‘አባል’ ማለት በማኅበሩ የአባላት መዝገብ የተመዘገበ እና ማኅበሩን መተዳደሪያ ደንብ የሚያከብርና የሚጠበቅበትን ክፍያ በወቅቱ የሚፈጽም መደበኛ አባል ማለት ነው።
                <br />2/ ‘ተባባሪ አባል’ ማለት መደበኛ አባል የነበረ በሥራ ዕድገት እና በመሣሠለው ልዩ ልዩ ሁኔታ በኪንግ ካውንቲ ውስጥ የሥራ መደቡን በመቀየር ከATU 587 ውጭ የሆነ፤ የዚህ ማኅበር አባላት በማኅበሩ ያላቸውን መብቶችም ይሁን ግዴታዎች በእኩል መወጣት የማይችል ነገር ግን ለዚህ ማኅበር በምክርም ሆነ በማኅበራዊ ተሳትፎው በጎ አስተዋጽዖ ለማበርከት ፈቃደኛ የሆነ ማለት ነው።
                <br />3/ ‘ቤተሰብ’ ማለት በአባላት መዝገብ በአባሉ የተመዘገበ የትዳር አጋር እና ልጆችን ማለት ብቻ ነው።
                <br />4/ ‘ኢትዮጵያዊ’ ማለት ከኢትዮጵያዊ ቤተሰቦች በኢትዮጵያ የተወለደ እና ያደገ እንዲሁም ራሱን ኢትዮጵያዊ ነኝ ብሎ
                የሚያምን ወይም የሚቆጥር ማለት ነው።
                <br />5/ ‘ትውልደ ኢትዮጵያዊ’ ማለት ከኢትዮጵያዊ እናት ወይም አባት ከኢትዮጵያ ውጭ የተወለደ ማለት ነው።
                <br />6/ ‘ማኅበር’ ማለት “የኢትዮጵያዊያን ትራንዚት ሠራተኞች ማኅበር - በኪንግ ካውንቲ ሜትሮ” ወይም Ethiopian Transit Employees Association - In King County Metro (ETEA) ማለት ነው።</h3>

                <h1>አንቀጽ 5. ራዕይ</h1>
                <h3>በዘመናዊ የትራንዚት አገልግሎት ዘርፍ ኢትዮጵያውያን እና ትውልደ ኢትዮጵያውያንን በማስተባበር ብቁ፣ ውጤታማ
            እና ተወዳዳሪ እንዲሆኑ በማስቻል ራስንና ወገንን እንዲሁም ሀገርን ሲጠቅሙ ማየት።</h3>
                <h1>አንቀጽ 6. ተልዕኮ</h1>
                <h3>በኪንግ ካውንቲ ሜትሮ ትራንዚት ውስጥ ያሉ ኢትዮጵያዊያን እና ትውልደ ኢትዮጵያውያን ሠራተኞችን የሙያ አቅም በማጠናከር በሜትሮ አስተዳደር እና በሠራተኞች ማኅበር/Union/ ላይ በማንኛውም የሥራ እንቅስቃሴ እና አስተዳደራዊ መዋቅር ውስጥ በጎ ተጽዕኖ መፍጠር።</h3>
                <h1>አንቀጽ 7. ዓላማ</h1>
                <h3>1/ በኪንግ ካውንቲ ሜትሮ ሕጎች፣ ደንቦች፣ መመሪያ፣ ፓሊሲና ኮንትራት ዙሪያ በአባላት መካከል የተሻለ ግንዛቤ
                እንዲኖር ማድረግ።<br />
                2/ በሥራ ላይ በየዕለቱ በሚያጋጥሙ ክስተቶች እና ችግሮች ዙሪያ በመወያየት የልምድ ልውውጥ ማድረግ።<br />

                3/ የኪንግ ካውንቲ ሜትሮ አሠራር በሚፈቅደው መሠረት በሥራ ሒደት የሚያጋጥሙ አስተዳደራዊና መሰል ችግሮችን ለመከላከል የሚያስችል አቅም ማጎልበት።<br />
                4/ በሠራተኛ ማኅበር (ATU 587) ውስጥ ንቁ ተሳትፎ ማድረግና በጎ ተጽዕኖ መፍጠር።<br />
                5/ አባላት ያላቸውን እውቀት እና አቅም በማጎልበት በከፍተኛ የሜትሮ ኃላፊነት ሥራ መደብ እንዲሳተፉ እና
            እንዲሰማሩ ማበረታታት።<br />
                6/ አባላት አካላዊ ብቃት እና ጤንነታቸውን እንዲጠብቁ ማገዝ።<br />
                7/ በአባላት እንዲሁም በቤተሰቦቻቸው መካከል ማኅበራዊ ግንኙነቶችን ማጠናከር እና በአባላትና በቤተሰቦቻቸው ላይ ሊደርስ በሚችል ድንገተኛ አደጋና ችግር በጋራ መካፈል።<br />
                8/ በኢትዮጵያውያን እና ትውልደ ኢትዮጵያውያን ማኅበረሰብ የሰብአዊና በጎ አድራጎት እንቅስቃሴ አቅም በፈቀደ መጠን መሳተፍ።</h3>

                <h1>አንቀጽ 8. መርሖ</h1>
                <h3>ማኅበሩ ዓላማውን ለማሳካት የሚከተሉትን መርሖዎች ይተገብራል፤</h3>
                <h3>አባልነት በሙሉ ፈቃደኝነት /Freewill membership/<br />
            እኩል ተሳትፎ /Equal participation/<br />
            ግልፅ አሠራር /Transparent system/<br />
            ተጠያቂ አመራር /Accountable leadership/<br />
            ማኅበራዊ ኃላፊነት /Social responsibility/</h3>
                <h1>አንቀጽ 9. እሴት</h1>
                <h3>ማኅበሩ ከማንኛውም ሃይማኖት፣ዘር እና ፖለቲካ የራቀ ነው። በመሆኑም በቀጥታም ሆነ በተዘዋዋሪ ምንም ዓይነት ሃይማኖታዊ፣ ፖለቲካዊ፣ እንዲሁም የዘር እና የቋንቋ እንቅስቃሴዎችን በማንኛውም መልኩ አያስተባብርም እንዲሁም አይደግፍም።</h3>
                <h1>አንቀጽ 10. የአባልነት መመዘኛዎች</h1>
                <h3>የሚከተሉትን የሚያሟላ አባል መሆን ይችላል፡፡<br />
            1/ በትውልድ ኢትዮጵያዊ ወይም ከኢትዮጵያውያን ቤተሰብ የተወለደ ወይም ራሱን ኢትዮጵያዊ ነኝ ብሎ የሚያምን ወይም የሚቆጥር፤<br />
            2/ በኪንግ ካውንቲ ሜትሮ ትራንዚት ውስጥ በማንኛውም የሥራ መደብ ተቀጥሮ በማገልገል ላይ ያለ እና የATU 587 አባል የሆነ፤<br />
            3/ የማኅበሩን ዓላማ፣ ሕግ፣ ደንብ፣ አሠራርና ውሳኔ የሚያከብር እና ተግባራዊ ለማድረግ ፈቃደኛ የሆነ፤ <br />4/ አስፈላጊውን የመመዝገቢያ ክፍያና ወርኃዊ መዋጮ ለመክፈል ፈቃደኛ የሆነ።</h3>
                <h1>አንቀጽ 11. ለአባልነት ስለሚቀርብ ማመልከቻ</h1>
                <h3>1/ ለቅንጅታዊ አሠራር እንዲሁም ዕቅድና ትግበራን ለመከታተል እንዲያመች የማኅበሩ አዲስ አባላት መቀበያ ጊዜ
            በየዓመቱ እ.አ.አ. ከ January 1 እስከ February 28 እና እ.አ.አ ከ July 1 እስከ August 31 ይሆናል።<br /> 2/ የአባልነት ጥያቄ በተዘጋጀ ቅጽ ተሞልቶ ለማኅበሩ ጸሐፊ በጽሑፍ ይቀርባል።<br />
            3/ በማኅበሩ ጸሐፊ አቅራቢነት ሥራ አስፈጻሚው የቀረበለትን የአባልነት ማመልከቻ ከተመለከተ በኋላ አስተያየቱን አክሎ ለጠቅላላ ጉባኤ ያቀርባል።<br />
            4/ ጠቅላላ ጉባኤ ለአባልነት የቀረበን ማመልከቻ በጉባኤ በተገኙት አባላት አብላጫ ድምፅ ይወስናል።</h3>
                <h1>አንቀጽ 12. ከአባልነት ስለመልቀቅና መታገድ</h1>
                <h3>1/ ማንኛውም አባል ያለ ጠቅላላ ጉባዔ ውሳኔ በሚከተሉት ሁኔታዎች ከማኅበሩ ሊለቅ ይችላል፤ ሀ/ በራሱ ፈቃድ፣<br />
            ለ/ በጡረታ ከመሥሪያ ቤቱ ሲሰናበት፣ ሐ/ ከዚህ ዓለም በሞት ሲለይ።
                    <br />2/ አንድ አባል በ አንቀጽ 18 ላይ የተቀመጡ ግዴታዎችን የማይፈጽም ወይም የማያሟላ ከሆነ መጀመሪያ የቃል ቀጥሎ የጽሑፍ ማስጠንቀቂያ በሥራ አስፈጻሚው ይሰጠዋል፤ ይህን አክብሮ ካልተገኘ ሥራ አስፈጻሚው መርምሮ ያግዳል፤ የታገደ አባል ጉዳዩን ለቁጥጥር ኮሚቴ በማቅረብ ቅሬታውን ማሰማት ይችላል።
            <br />3/ በዚሁ አንቀጽ ከላይ በ ንዑስ አንቀጽ 2 በጽሑፍ የተሰጠ ማስጠንቀቂያ ከተሰጠበት ቀን ጀምሮ እስከ ዓመት ድረስ ጊዜ ገደብ ይኖረዋል።
            <br />4/ ማንኛውም አባል የጽሑፍ ማስታወሻ ለጸሐፊው በመስጠት በማንኛውም ጊዜ ያለምንም ቅድመ ሁኔታ ከማኅበሩ የመልቀቅ መብቱ በዚህ አንቀጽ ንዑስ አንቀጽ 1/ሀ/ መሠረት የተጠበቀ ነው። ከዚህ አንጻር ሲለቅ ከማንኛውም ውዝፍ ክፍያ ወይም እዳ ነፃ ስለመሆኑ /clearance/ ማረጋገጫ ሊይዝ ይገባል፤ ለመልቀቅ ስለፈለገበት ምክንያት ግን ለማኅበሩ የማሳወቅ ግዴታ የለበትም።
            <br />5/ ከማኅበሩ የሚለቅ ወይም የሚታገድ አባል በቆይታው ወቅት ያገኛችውን ምሥጢሮች የመጠበቅ ግዴታ አለበት፤ በማናቸውም ሁኔታ ለሌላ አካል ማውጣት የለበትም።
            <br />6/ በማንኛውም ሁኔታ የለቀቀ አባል በአባልነት ዘመኑ በማኅበሩ ለመመዝገቢያ፣ ለወርኃዊ እና ለልዩ ልዩ መዋጮ የከፈለው ክፍያ በማናቸውም መልኩ አይመለስለትም።</h3>
                <h1> 13. ተመልሶ አባል ስለመሆን</h1>
                <h3>1/ ተመልሶ አባል ለመሆን ማመልከት የሚቻለው በፈቃዱ ለለቀቀ እና ሲለቅ ከማናቸውም ውዝፍ ክፍያ ወይም እዳ
            ነፃ /clearance/ ላቀረበ አባል ብቻ ነው፤<br />
            2/ ተመልሶ አባል የሆነ አባል በሌላ ጊዜ ከአባልነት ለቆ የመመለስ ዕድል ዳግመኛ አይሰጠውም፤<br />
            3/ ተመልሶ አባል እንዲሆን የተፈቀደለት ማንኛውም ሰው ሲመለስ :-<br />
            ሀ/ ከአንድ ዓመት በታች ከሆነ የቀረበትን ሙሉ ክፍያ ይከፍላል፤<br />
            ለ/ አንድ ዓመትና ከዚያ በላይ ከሆነ የመመዝገቢያ ክፍያው ከአዲስ አባል በ2.5 እጥፍ ይሆናል፤<br />
            ሐ/ የለቀቀበት ምክንያት ሀገር ከመቀየር፣ ከሥራ መቀነስ (layoff)፣ ሌላ ሥራ ከመለወጥ ወይም የረጅም ጊዜ አካል ጉዳት ጋር የተያያዘ ከሆነ የመመዝገቢያ ክፍያ ቀርቶለት እንደማንኛውም አዲስ አባል ይሆናል።<br />
            4/ ተመልሶ አባል የሆነ ሰው ከላይ በ አንቀጽ 13.3/ሐ/ መሠረት ካልሆነ በቀር ቢያንስ ለ1 ምርጫ ወቅት ወይም ለ2 ዓመታት በሥራ አስፈጻሚ ወይም በቁጥጥር ኮሚቴ አባልነት መሳተፍ አይችልም። ሌሎች መብትና ግዴታዎቹ እንደ አዲስ አባል የተጠበቁ ናቸው።</h3>
                <h1>አንቀጽ 14. የአባላት መዝገብ</h1>
                <h3>የሚከተሉትን ዝርዝር የሚያካትት የአባላት መዝገብ ተደራጅቶ ይያዛል፤ እንደየአስፈላጊነቱም ይሻሻላል።<br />
            1/ የአባል ስምና አድራሻ፣<br />
            2/ የአባል የሥራ መደብ፣<br />
            3/ አባል የሆነበት ቀን፣ ወርና ዓመት፣<br />
            4/ ለአባልነት የተከፈለ የመመዝገቢያ ክፍያ፣<br />
            5/ የአባል የቤተሰብ ሁኔታ (ባል፣ ሚስት፣ የትዳር ጓደኛ፣ ልጆች ዝርዝር)፣<br /> 6/ አባልነት የተቋረጠበት ቀን፣ ወር፣ ዓመት እና ሁኔታ፣<br />
            7/ ተመልሶ አባል የሆነበት ቀን፣ ወርና ዓመት እንዲሁም<br />
            8/ ስለ አባሉ የተላለፉ ውሳኔዎች። </h3>
                <h1>አንቀጽ 15. ስለ መመዝገቢያ ክፍያ</h1>
                <h3>1/ ማንኛውም አዲስ አባል የማኅበር አባልነት ሲፈቀድለት የመመዝገቢያ 100 /መቶ/ ዶላር በአንድ ጊዜ ይከፍላል።<br /> 2/ በዚህ አንቀጽ ንዑስ አንቀጽ /ሀ/ መሠረት የተከፈለ ገንዘብ በማናቸውም ሁኔታ ለአባላት ተመላሽ አይደረግም።<br />

            3/ ከአባልነት ለቆ በድጋሚ አባል ለመሆን የሚጠይቅ አመልካች አባል እንዲሆን ጠቅላላ ጉባኤ ሲፈቅድለት የመመዝገቢያ ክፍያ በ አንቀጽ 13/3/ መሠረት በድጋሚ ይከፍላል።</h3>
                <h1>አንቀጽ 16. ስለ ወርኃዊ መዋጮና ቅጣት</h1>
                <h3>1/ ማንኛውም አባል በወር $20 /ሃያ/ ወርሃዊ ክፍያ ያዋጣል። ወርሃዊ ክፍያ የሚከፈለው በሁለት ወር አንድ ጊዜ በማኅበሩ መደበኛ ስብሰባ ወቅት ወይም ከመደበኛ ስብሰባ በኋላ በሳምንት ጊዜ ውስጥ የሁለት ወሩ ተደምሮ አርባ (40) ዶላር ነው።<br />
            2/ ያለበቂ ምክንያት በመደበኛ ስብሰባ ላይ ያልተገኘ ወይም በማኅበሩ የተወሰኑ መገናኛ መንገዶች ላይ ከአስራ አምስት ቀን አስቀድሞ እንደማይገኝ ሳያስታወቅ የቀረ አባል በስብሰባ ባለመገኘቱ ወይም ባለማስፈቀዱ ሠላሳ (30) ዶላር መቀጫ ይከፍላል።<br />
            3/ በዓመታዊው የቤተሰብ ስብሰባ (Annual get together picnic) ላይ ደግሞ ከሁለት ሳምንት በፊት አስቀድሞ ሳያስታውቅ የቀረ አባል $100 /መቶ/ መቀጫ ይከፍላል።<br />
            4/ በዚህ አንቀጽ ንዑስ አንቀጽ /2 እና 3/ መሠረት የተከፈለ የቅጣት ገንዘብ በማናቸውም ሁኔታ ለአባላት ተመላሽ አይደረግም።</h3>
                <h1>አንቀጽ 17. የአባላት መብት</h1>
                <h2>1/ ጠቅላላ መብቶች</h2>
                <h3>
                    ማንኛውም አባል የሚከተሉት መብቶች ይኖሩታል።
            <br />ሀ/ በስብሰባ የመሳተፍ፣ ከአጀንዳው ጋር በተያያዙ ጉዳዮች ዙሪያ የራሱን ሃሳብ የማንሸራሸር፣ አስተያየት እና የውሳኔ ድምፅ መስጠት፤
            <br />ለ/ በማኅበሩ የመገናኛ መንገዶች ላይ በሚደረጉ ውይይቶች ላይ ተሳትፎ ማድረግ፤
            <br />ሐ/ በ አንቀጽ 13.4 እንደተጠቀሰው ካልሆነ በቀር በማኅበሩ ሥራ አስፈጻሚ ውስጥ መምረጥና መመረጥ፤ <br />መ/ ማኅበሩን በሚመለከቱ ጉዳዮች ላይ ጥያቄ፣ ቅሬታና አስታያየት ማቅረብና መልስ ማግኘት፤
            <br />ሠ/ በፈቃዱ ከማኅበሩ መሰናበት።</h3>
                <h2>2/ ከሥራ ጋር የተያያዙ መብቶች</h2>
                <h3>ማንኛውም አባል የሚከተሉት ከሥራ ጋር የተያያዙ መብቶች ይኖሩታል።<br />
            ሀ/ በሥራ ዲስፕሊን ጉዳይ በመሥሪያ ቤቱ አስተዳደር ውሳኔ ከሥራው የመባረር ወይም የመታገድ ችግር ሲያጋጥመው ሁሉም አባላት በሠራተኛ ማኅበር (ATU 587 Union) ስብሰባ ላይ በመገኘት በሚሰጠው ውሳኔ በአጋርነት ይሳተፋሉ፤<br />
            ለ/ ከላይ በዚሁ ንዑስ አንቀጽ በተራ ቁጥር /ሀ/ በተጠቀሰው ሁኔታ የሠራተኛ ማኅበሩ (ATU) ጉዳዩን ባያሸንፍና አባሉ ከሥራ ቢታገድ፤ ማኅበሩ ለታገደው አባል የሕግ ምክር አገልግሎት (Consultancy fee) እና ተያያዥ ጉዳዮች ድጋፍ እስከ ሦስት ሺ (3,000) ዶላር ወጪ በማድረግ አባሉን ያግዛል፤<br />
            ሐ/ በዚህ ንዑስ አንቀጽ ከላይ በተራ ቁጥር /ለ/ እንደተጠቀሰው የታገደ አባል ወርሃዊ መዋጮና ሌሎች ክፍያዎችን ወደ ሥራው እስኪመለስ አይከፍልም። የእግድ ሁኔታው ከሥራ መሰናበትን የሚያስከትል ከሆነ ከሥራ ከተሰናበተበት ቀን ጀምሮ ከማኅበሩ መደበኛ አባልነት ለቆ በተባባሪ አባልነት መቀጠል ይችላል።<br />
            መ/ በተለያዩ ምክንያቶች በመሥሪያ ቤቱ አማካኝነት ከሥራ የተቀነሰ (Lay off) የሆነ አባል ከተቀነሰበት ቀን ጀምሮ ለአንድ ዓመት ያህል ያለ ወርኃዊ መዋጮ ክፍያ በአባልነት ሊቀጥልና ጥቅምም ሊያገኝ ይችላል፤ ቅነሳው ከአንድ ዓመት በላይ የሚቆይ ከሆነ ግን አባሉ ወርኃዊ መዋጮ ሳይከፍልና ምንም ጥቅም ከማኅበሩ ሳይጠብቅ በተባባሪ አባልነት መቀጠል ይችላል፤<br />
            ሠ/ የሕመም መልቀቂያ (Sick leave) ለሚያስፈልገው በሕመም ላይ ያለ አባል የመሥሪያ ቤቱን ሕግና ደንብ በተከተለ መልኩ ያለውን ፈቃድ (Vacation, AC and Sick leave) አሟጦ ሲጨርስና በፈቃድ እርዳታ ሰሌዳ (Sick leave donation board) ሲለጠፍ እስከ አራት መቶ ሰማኒያ (480) የሚደርስ ሰዓት (sick leave) በአንቀጽ 18/11/ መሠረት የማኅበሩ አባላት ይለግሱታል፤<br />
            ረ/ በአባል ቤተሰብ ላይ ለደረሰ ሕመም የቤተሰብ ሕመም ፈቃድ የሚለገሰው አባሉ ሲጠይቅ በሌሎች አባላት በጎ ፈቃደኝነት ነው፤<br />
            ሰ/ ቢያንስ ለአራት (4) ተከታታይ ዓመታት በማኅበሩ አባልነት ለቆየ ማንኛውም አባል ከሥራው በጡረታ ሲገለል ማኅበሩ የአንድ ሺ አምስት መቶ /$1,500/ ዶላር ስጦታ ያበረክታል።</h3>
                <h2>3/ ከማኅበራዊ ኃላፊነት ጋር የተያያዙ መብቶች</h2>
                <h3>ማኅበሩ በሐዘንና በችግር ጊዜ ከአባላቱ ጋር አብሮ ይቆማል። የአባላትን ማኅበራዊ ኃላፊነት ከማገዝ ረገድ አባላት የሚከተሉትን
            መብቶች ወይም ጥቅሞች ከማኅበሩ ያገኛሉ።<br />
            3.1/ በማኅበርተኛው ላይ የአካል መጉደልና ለረዥም ጊዜ የሚቆይ ከባድ አደጋ ወይም ሕመም ሲደርስ አባሉ ከመሥሪያ ቤቱ የሚያገኝው መድኅን ወይም ኢንሹራንስ እንደተጠበቀ ሆኖ ማኅበሩ በአጋርነት ለአንድ ጊዜ ብቻ ወጪ የሚደረግ ሦስት ሺ /$3,000/ ዶላር ድጋፍ ያደርጋል።<br />

            3.2/ ማኅበርተኛው ወይም የማኅበርተኛው ቤተሰብ ከዚህ ዓለም በሞት ሲለይ ማኅበሩ የሚከተለውን የገንዘብ መጠን ድጋፍ ያደርጋል፦<br />
            ሀ/ ማኅበርተኛው ከዚህ ዓለም ሲለይ አራት ሺ (4,000) ዶላር ለ/ ለማኅበርተኛው የትዳር አጋር አራት ሺ (4,000) ዶላር<br />
            ሐ/ ለማኅበርተኛው ልጅ ሁለት ሺ (2,000) ዶላር<br />
            3.3/ በአንቀጽ 17.3.2ሐ መሠረት የሚሰጠው ድጋፍ እድሜያቸው ከ 26 ዓመት በታች ለሆነ ልጆች ብቻ ይሆናል።<br />
            3.4/ ባልና ሚስት የማኅበር አባላት ቢኖሩ ከላይ በአንቀጽ 17.3.2/ሐ/ መሠረት ለልጆች የሚሰጠው ድጋፍ ወጪ የሚሆነው በሁለቱ ወላጆች ስም አንድ ጊዜ ብቻ ነው። በመሆኑም በአንድ ክስተት ሁለት ጊዜ የገንዘብ ድጋፍ አይደረግም።<br />
            3.5/ በአባላት መካከል ያለውን አንድነት ለማጠናከር ከችግር ጊዜ በተጨማሪ በደስታም ወቅት ለመካፈል አንድ አባል በአባልነት እያለ ለመጀመሪያ ጋብቻው እና ከአራት ዓመት ዩነቨርስቲ ትምህርት መመረቁን ሲያስታውቅ ማኅበሩ በዓመታዊው የቤተሰብ ዝግጅት ላይ የእንኳን ደስ አለህ መልእክትና ከ አምስት መቶ (500) ዶላር ያልበለጠ ስጦታ ያበረክትለታል።</h3>

                <h1>አንቀጽ 18. የአባላት ግዴታ</h1>
                <h3>እያንዳንዱ የማኅበሩ አባል ከዚህ በታች የሚከተሉት እንዲሁም በአባላቱ ጠቅላላ ጉባዔ አብላጫ ድምፅ እንደ አስፈላጊነቱ
            የሚወሰኑ ግዴታዎችን መፈጸም ይጠበቅበታል።<br />
            1/ የማኅበሩን መተዳደሪያ ደንብ ማክበር፤<br />
            2/ እውነተኛና ትክክለኛ የቤተሰብ ሁኔታውን በአባላት መዝገብ ላይ ማስመዝገብ፤<br />
                    <br />3/ በመተዳደሪያው ደንብ መሠረት ክፍያዎችን በጊዜው መፈጸም። ማንኛውም አባል እስከ ስድስት ወር ውዝፍ ክፍያ ካለበት በሥራ አስፈጻሚው ያለበት የውዝፍ መጠን ከ ሠላሳ (30) ዶላር መቀጮ ጋር ተጠቅሶ ማሳሰቢያ ይሰጠዋል፤ በተሰጠው ማሳሰቢያ መሠረት ሳይከፍል የዓመት ውዝፍ ከተጠራቀመበት ሥራ አስፈጻሚው ከአባልነት ያግደዋል፤
            <br />4/ በስብሰባዎች ላይ መገኘትና በቂ ተሳትፎ ማድረግ። በስብሰባ ለመገኘት የሥራ ሰዓቱ (schedule) የማይፈቅድለት ከሆነ 1 ወር አስቀድሞ ስሙን Lay off book ላይ በማስቀመጥ ወይም ሌላ አስፈላጊውን ፈቃድ በመውሰድ የስብሰባ ቀን ላለማሳለፍ የተቻለውን ሁሉ ጥረት ማድረግ ካልሆነም ከ15 ቀን አስቀድሞ ለሊቀመንበሩ ወይም ጸሐፊው ማሳወቅ፤
            <br />5/ ማንኛውም አባል በበጀት ዓመት ውስጥ ካሉ አምስት መደበኛ ስብስባዎች አስቀድሞ በማስታወቅ ወይም በፈቃድም ቢሆን ከሁለት መደበኛ ስብሰባ በላይ መቅረት አይችልም፤
            <br />6/ የማኅበሩን ምሥጢሮች መጠበቅ፤
            <br />7/ በሥራ ላይ እንዲሁም በቤተሰቡ ላይ ያጋጠመውን ችግር በወቅቱ ለሊቀመንበር ወይም ለጸሐፊው ማሳወቅ፤ <br />8/ ጠቅላላ ጉባዔ ለሚያስተላልፋቸው ውሳኔዎች ተገዥ መሆን፤
            <br />9/ በአባላት መካከል ያለውን ትብብር፣ ስምምነትና ሰላም ማክበርና መጠበቅ፤
            <br />10/ በማኅበሩ የተጣለበትን ኃላፊነት በታማኝነትና በብቃት መፈጸም፤
            <br />11/ በአንቀጽ 17.2/ሠ/ መሠረት የሕመም ፈቃድ ልገሳን ወጥና ሥርዓት ባለው መንገድ ለማዳረስ እንዲመች እያንዳንዱ አባል በማኅበራዊ ጉዳዮች ንዑስ ኮሚቴ ሲታዘዝ በመጀመሪያ ስሙ ቅደም ተከተል (first name alphabet order) ተራውን ጠብቆ የማዋጣት ግዴታ አለበት፤
            <br />12/ ማንኛውም አባል ከማኅበሩ ሲለቅ ከዕዳ ነጻ መልቀቂያ መያዝ አለበት፤
            <br />13/ አዲስ አባል በአንቀጽ 17.3.3.2 እስከ 17.3.3.5 ያሉ ማኅበራዊ መብቶች ወይም ጥቅሞች ለማግኘት የማኅበሩ
            አባል ሆኖ ቢያንስ 4 ወር መቆየት አለበት።</h3>
                <h1>አንቀጽ 19. የማኅበሩ ሕጋዊ ሰውነት እና ኃላፊነት</h1>
                <h3>ማኅበሩ ለትርፍ ያልተቋቋመ ሆኖ በሕግ የሰውነት መብት አለው። በዚህ መሠረት ማኅበሩ ካለው ጠቅላላ ሀብት በላይ ተጠያቂ አይሆንም፤ ዕዳውም ወደ አባላቱ አይተላለፍም።</h3>
                <h1>አንቀጽ 20. የማኅበሩ አደረጃጀት</h1>
                <h3>
                    ማኅበሩ የሚከተለው ድርጅታዊ መዋቅር ይኖረዋል፦<br />
            1/ ጠቅላላ ጉባኤ /General Assembly/<br />
            2/ የሥራ አስፈጻሚ ኮሚቴ /Executive Committee/<br />
            3/ የቁጥጥር ኮሚቴ /Oversight Committee/<br />
            4/ በሥራ አስፈጻሚ ኮሚቴ ሥር ያሉ አራት ንዑሳን ኮሚቴዎች /Sub Committees/</h3>
                <h2>1/ ጠቅላላ ጉባኤ</h2>
                <h3>1.1/ የማኅበሩ ጠቅላላ ጉባዔ ማለት ሁሉም አባላት በእኩል ድምፅ የሚሳተፉበት ጠቅላላ ስብሰባ ነው።<br />
            1.2/ የማኅበሩ መደበኛ ጠቅላላ ጉባኤ እ.አ.አ በሁለት ወር አንድ ጊዜ ሥራ አስፈጻሚው በሚያስታውቀው መሠረት ይሆናል። የሁኔታዎች አመቺነት በሥራ አስፈጻሚው ታይቶ በወር አንድ ጊዜ አባላቱ በፈቃደኝነት የሚሳተፉበት የZoom (video conference) ስብሰባ ሊያካሂድ ይችላል።
            <br />1.3/ የማኅበሩ አባላት በመደበኛ ጠቅላላ ጉባኤው ላይ አስቀድመው አጀንዳ ማስያዝ ይችላሉ።
            <br />1.4/ አስፈላጊ ሆኖ ሲገኝ አስቸኳይ ጠቅላላ ጉባኤ በሥራ አስፈጻሚው ወይም በቁጥጥር ኮሚቴ አማካኝነት ሊጠራ
            ይችላል ። የአስቸኳይ ጉባኤ ስብሰባ ምልዓተ ጉባኤ የሚሆነው 3/4ኛው አባል ሲገኝ ነው።
            <br />1.5/ በዚሁ አንቀጽ ከላይ በንዑስ አንቀጽ 1.4 መሠረት በመጀመሪያው የአስቸኳይ ጠቅላላ ጉባኤ ጥሪ ምልዓተ ጉባኤ
            የሚሆነው 3/4ኛው አባል ካልተገኝ ሁለተኛ ጥሪ ተካሂዶ በዚያ ላይ በተገኘው አባል አብላጫ ድምጽ ውሳኔ ይሰጣል።<br /> 1.6/ በየትኛውም ጠቅላላ ጉባኤ ላይ በድምጽ ብልጫ የሚተላለፉ ውሳኔዎች በስብሰባው ባልተገኙ አባላት ላይም
            ተፈጻሚ ይሆናሉ።
            <br />1.7/ የማኅበሩ ጠቅላላ ጉባኤ ማኅበሩን በሚመለከት የመጨረሻ ውሳኔ ሰጪ የበላይ አካል ሆኖ የሚከተሉት ሥልጣንና ተግባራት ይኖሩታል፦
            <br />ሀ/ የሥራ አስፈጻሚ፣ የቁጥጥር ኮሚቴና ንዑሳን ኮሚቴዎችን በምርጫ የመሰየምና የመሻር፤
            <br />ለ/ የማኅበሩን የሥራ ክንውን ሪፖቶችን ያዳምጣል፣ አቅጣጫ ይሰጣል፣ ተገቢውን ውሳኔ ያስተላልፋል፤
            <br />ሐ/ የማኅበሩን ዓመታዊ የሥራ ዕቅድና በጀት መርምሮ ያጸድቃል፤
            <br />መ/ በሒሳብ ቁጥጥርና ምርመራ ሪፖርት ላይ ውሳኔ ይሰጣል፤
            <br /> ሠ/ አባል ማኅበርተኛ ግዴታውን ባለመወጣቱ ወይም ጥፋት ፈጽሞ ሲገኝ፣ ከሥራ አስፈጻሚና ቁጥጥር ኮሚቴ የሚቀርብለትን የውሳኔ ሐሳብ መርምሮ ይወስናል፤
            <br />ረ/ የማኅበሩን መተዳደሪያ ደንብ ያሻሽላል፣ ያፀድቃል፤
            <br />ሰ/ ሌሎች ለማኅበሩ እንቅስቃሴ አስፈላጊ የሆኑ ተግባራትን ይወስናል።</h3>
                <h2>2/ ሥራ አስፈጻሚ</h2>
                <h3>2.1/ የማኅበሩ ሥራ አስፈጻሚ ኮሚቴ ሊቀመንበር ፣ጸሐፊ፣ የሒሳብ ሹም፣ የማኅበራዊ ኮሚቴ ሰበሳቢ፣ የኮንትራት ና
                ሕግ ኮሚቴ ሰብሳቢ፣ የሴፍቲ እና ጤና ኮሚቴ ሰብሳቢዎችን የሚያካትት ሲሆን በዋነኝነት በሊቀመንበሩ እየተመራ የማኅበሩን ጠቅላላ ጉባዔ ውሳኔዎች፣ ዕቅዶች እና የዕለት ተዕለት እንቅስቃሴ በበላይነት የሚያስፈጽም ነው፤
            <br />2.2/ የሥራ አስፈጻሚ ኮሚቴው የሥራ ዘመን ሁለት አመት ብቻ ይሆናል፤
            <br />2.3/ የሥራ አስፈጻሚ ኮሚቴ በሚወስናቸው ውሳኔዎች ከሊቀመንበሩ በስተቀር ሁሉም አባላቱ በእኩል ድምፅ
            ይሳተፋሉ፤ በማንኛውም ድምፀ ውሳኔ የሊቀ መንበሩ ድምፅ እንደ ሁለት ድምፅ ይቆጠራል፤

            <br />2.4/ በልዩ ልዩ ምክንያት ሊቀመንበሩ ወይም ጸሐፊው በአገልግሎት ባይቀጥሉ የማኅበራዊ ኮሚቴ ሰብሳቢ የራሱን ኮሚቴ እያስተባበረ ክፍት ቦታውን በመሙላት ማኅበሩን እስከሚቀጥለው ምርጫ ያገለግላል፤ ነገርግን የማኅበሩ ሊቀመንበርና ጸሐፊ በተመሳሳይ ወቅት ከአመራርነት ከተገለሉ ወይም የሥራ አስፈጻሚ አባላት ቁጥር ከአምስት ካነሰ በቁጥጥር ኮሚቴ አስመራጭነት በአስቸኳይ ጠቅላላ ጉባዔ ምርጫ ይተካሉ፤
            <br />2.5/ አንድ የሥራ አስፈጻሚ ኮሚቴ አባል በአንድ የሥራ አስፈጻሚ ኃላፊነት (ተመሳሳይ ኃላፊነት) ከሁለት ተከታታይ ጊዜ በላይ አያገለግልም፤
            <br />2.6/ የሥራ አሰፈጻሚው ኮሚቴ የሚከተሉት የሥራ ድርሻና ኃላፊነት ይኖረዋል። <br />ሀ/ የመደበኛ ስብሰባ አጀንዳን ከስብሰባው ቀን አስቀድሞ ያዘጋጃል።
            <br />ለ/ በአጠቃላይ ጉባኤው ውሳኔ ሊሰጣቸው የሚገቡ ጉዳዮች ላይ አስቀድሞ ተወያይቶ የውሳኔ ሐሳብ ያቀርባል።
            <br />ሐ/ በሥሩ የተዋቀሩትን ንዑሳን ኮሚቴ የሥራ እንቅስቃሴ ይመራል፣ ይቆጣጠራል፣ ያስተባብራል እንደ አስፈላጊነቱ ተገቢውን እገዛ ይሰጣል።
            <br />መ/ ኮሚቴው በወር አንድ ጊዜ ብዙኃኑ የሥራ አስፈጻሚው ኮሚቴው በተስማሙበት መንገድ ይሰበሰባል።<br /> ሠ/ አስቸኳይ ስብሰባ እንደ አስፈላጊነቱ አጠቃላይ ማህበሩን ሊጠራ ይችላል።
            <br />ረ/ ከ ATU 587 እና ከሌሎች ተቋማት ጋር አሰፈላጊውን የሥራ ግንኙነት ያደርጋል።
            <br />ሰ/ ዓመታዊ በጀት ያቀርባል፤ በጠቅላላ ጉባዔ አጸድቆ ይተገብራል።
            <br />ሸ/ በአባላት መካከል ግጭት ቢፈጠር ሰላም እንዲሰፍን ያገላግላል።
            <br />ቀ/ በፈቃዱ ለሚለቅ አባል ያለበትን እዳ አጣርቶ መልቀቂያ (clearance) ይሰጣል።</h3>
                <h2>3/ ሊቀመንበር</h2>
                <h3>የማኅበሩ ሊቀመንበር የሥራ ድርሻና ኃላፊነት:-
            <br />3.1/ የማኅበሩን ሥራ አስፈጻሚ እና አጠቃላይ የሥራ እንቅስቃሴ በበላይነት ይመራል ፣ ይቆጣጠራል፣ ያስተባብራል፤ <br />3.2/ በማኅበሩ አባላት የተወሰኑ የሥራ ማስኬጃ የገንዘብ ወጪዎችን ያጸድቃል፤
            <br />3.3/ የወርኃዊ ስብሰባዎችን ቀን፣ ሰዓትና ቦታ ቢያንስ ከስብሰባ ቀን አምስት ቀናት አስቀድሞ ለአባላት ያሳዉቃል። እንዲሁም ለስብሰባው ሁለት ቀን ሲቀረው በጸሐፊዉ አማካኝነት ማስታወሻ እንዲደርስ ያደርጋል፤
            <br />3.4/ በአባላት ፍላጎት መነሻነት የስብሰባ ቀን ወይም ቦታ እንዲሁም ሰዓት መለወጥ ካስፈለገ ለስብሰባ አመች ስፍራዎችን በማፈላለግ ለአባላቱ አቅርቦ እንዲጸድቅ ያደርጋል፤
            <br />3.5/ የስብሰባ አጀንዳ በሚገባ ተዘጋጅቶ ለአባላት ከአንድ ሳምንት አስቀድሞ ማኅበሩ ለሥራ በሚጠቀምበት የመገናኛ መንገዶች እንዲደርስና ዉይይት እንዲደረግበት ያደርጋል፤

            <br />3.6/ በስብሰባ ሰዓት አባላቱ ለስብሰባው በተቀረፀው አጀንዳ ላይ ብቻ መወያየት እንዳለባቸው ይቆጣጠራል፤
            <br />3.7/ ወርኃዊ ስብሰባ ላይ በጸሐፊዉ አማካኝነት የስብሰባው ቃለጉባኤ መያዙን ያረጋግጣል፣ በሚቀጥለው ቀን
            ለአባላት መድረሱን ይከታተላል፤
            <br />3.8/ በስብሰባ ወቅት ውሳኔ የተሠጠባቸውን እና ውይይት የተደረገባቸው ነጥቦች መተግበራቸውን በቅርበት ይከታተላል፤
            <br />3.9/ በወርኃዊው ስብሰባ ያለበቂ ምክንያት የሚቀሩ አባላት ላይ በመተዳደሪያ ደንቡ መሠረት ተገቢ እርምት እንዲወሰድ ያደርጋል፤
            <br />3.10/ ከ ATU 587 እና ከ ሌሎች ተቋማት ጋር አሰፈላጊውን የሥራ ግንኙነት በበላይነት ይመራል፣ ማኅበሩን ይወክላል፣ ካልቻለ ጸሐፊውን ወይንም ከሥራ አስፈጻሚው አባላት አንዱ እንዲወክል ያደርጋል።</h3>
                <h2>4/ ጸሐፊ</h2>
                <h3>የማኅበሩ ጸሐፊ የሥራ ድርሻና ኃላፊነት፦
            <br />4.1/ የሥራ አስፈጻሚ ኮሚቴው አባል ሆኖ ያገለግላል፤
            <br />4.2/ ሊቀመንበሩ በማይገኝበት ወቅት ስብሰባዎችን በበላይነት ይመራል፤
            <br />4.3/ የማኅበሩን ማኅተምና ቃለ ጉባኤ ይይዛል፤ እንዲሁም ሌሎች ሰነዶችን በዘመናዊ የሪከርድ አያያዝ ተጠብቆ እንዲቀመጥ ያደርጋል፤
            <br />4.4/ ወርኃዊ የስብሰባ ቀን፣ ሰዓት እና ቦታን በተመለከተ ማስታወሻ ለአባላቱ እንዲደርስ ያደርጋል፤
            <br />4.5/ የሚታተሙ በራሪ ወረቀት (flyers)፣ የሚለጠፉ ማስታወቂያ ወይም ሌሎች የመረጃ ማስተላለፊያ መንገዶችን
            በበላይነት ይመራል ይቆጣጠራል፤
            <br />4.6/ የማኅበሩን ቼክ በአደራ ይይዛል፤ ወጪዎች ሲኖሩ በቃለ ጉባኤ በተወሰነው መሠረት እና የሒሳብ ሹም ሲጠይቅ ቼክ ያዘጋጃል ለሊቀመንበሩ ፊርማ ያቀርባል፤
            <br />4.7/ በመደበኛ የአባላት ሰብሰባ ላይ የተነሱ አጀንዳዎችንና ውይይቶችን በሚቀጥለው ቀን ለአባላት ማጠቃለያ (summary) ማኅበሩ ለሥራ በሚጠቀምባችው የመገናኛ መንገዶች ይልካል፤
            <br />4.8/ በስብሰባ ላይ የተገኙትንና የቀሩትን አባላት ስም ዝርዝር ይዞ ያልተገኙት ለውሳኔ እንዲቀርቡ ለሊቀመንበሩ ያስተላልፋል፤
            <br />4.9/ አዲስ አባላትን በአባላቱ ሲወሰን ተቀብሎ ይመዘግባል፤ የአባላትንም መዝገብ ያደራጃል፤የሚተላለፉ ውሳኔዎችን በየማኅደር ይይዛል።
            </h3>
                <h2>5/ የሒሳብ ሹም</h2>
                <h3>የማኅበሩ የሒሳብ ሹም ሥራ ድርሻና ኃላፊነት፦
            <br />5.1/ የሥራ አስፈጻሚ ኮሚቴ አባል ሆኖ ያገለግላል፤
            <br />5.2/ ሊቀመንበሩ እና ጸሐፊው በማይገኙበት ወቅት ስብሰባዎችን በበላይነት ይመራል፤
            <br />5.3/ የሒሳብ ሹም ሆኖ የተመረጠው አባል የፋይናንስ ንዑስ ኮሚቴ ሰብሳቢ ሆኖ ያገለግላል፤ <br />5.4/ የሒሳብ ሹም በተለይ የሚከተሉትን ተግባራት ያከናውናል፤
            <br />ሀ/ ወርኃዊ መዋጮ፣ የመመዝገቢያ ክፍያ እና ቅጣት ክፍያዎች ከእያንዳንዱ አባላት መሰብሰቡን ይከታተላል፤ <br />ለ/ በደንቡ መሠረት ወጪዎችን ይጠይቃል፣ በጸሐፊው ቼክ እንዲዘጋጅ ያደርጋል፣ በሥራ አስፈጻሚው
            ውሳኔ የጸደቁ ክፍያዎችን በሊቀመንበሩ ፊርማ ወጪ እንዲሆኑ ያስደርጋል፤
            <br />ሐ/ የተሰበሰበ ክፍያ በሰዓቱ ወደ ባንክ መግባቱንና ለተፈለገው ዓላማ መዋሉን ይከታተላል፤
            <br />መ/ ለማኅበሩ አባላት የሚሰጥ ገንዘብ ለሚገባው አባል በተገቢው ሰዓት ያስረከባል፤
            <br />ሠ/ የማኅበሩን ወጭና ገቢ በአግባቡ እንዲመዘገብ ተያያዥ የሒሳብ ሰነዶችም ፋይል መደረጋቸውን ያረጋግጣል፤
            <br />ረ/ በየስድስት ወሩ የማኅበሩን ጠቅላላ የሒሳብ ሪፖርት ለማኅበሩ አባላት ያቀርባል፤
            <br />ሰ/ የማኅበሩን ሒሳብ ሰነዶች አቅርቦ ያስመረምራል እንዲሁም ማንኛዉንም የሒሳብ ነክ ሥራዎች
            ያከናዉናል፤
            <br />ሸ/ በተጨማሪም በሊቀመንበሩ የሚሰጡ የተለያዩ ተግባሮችን ያከናውናል።</h3>
                <h2>6/ ንዑሳን ኮሚቴዎች</h2>
                <h3>6.1/ በሥራ አስፈጻሚ ዓቢይ ኮሚቴ ሥር ንዑሳን ኮሚቴዎች የሚኖሩ ሲሆን የእያንዳንዱ ንዑስ ኮሚቴ ዝርዝር የሥራ
                ድርሻና ኃላፊነት ከታች ተገልጦአል።
            <br />6.2/ የንዑሳን ኮሚቴዎች የሥራ ዘመን እንደ ሥራ አስፈጻሚው ሁለት አመት ይሆናል።
            <br />6.3/ አንድ የንዑስ ኮሚቴ አባል በአንድ የሥራ ኃላፊነት ቦታ ከሁለት ተከታታይ ጊዜ በላይ አያገለግልም። <br />6.4/ ንዑሳን ኮሚቴዎች ቢያንስ በወር አንድ ጊዜ ብዙኃኑ አባላቶቻቸው በመረጡት መንገድ ይገናኛሉ። 6.5/ በመደበኛ የማኅበሩ ስብሰባዎች ላይ ንዑሳን ኮሜቴዎች የሥራ እንቅስቃሴያቸውን ሪፖርት ያቀርባሉ።</h3>
                <h2>7/ የፋይናንስ ንዑስ ኮሚቴ</h2>
                <h3>7.1/ በሒሳብ ሹም ሥር ሆኖ ያገለግላል፤ የሒሳብ ሹም የዚህ ኮሚቴ ሰብሳቢ ሆኖ ያገለግላል።

            <br />7.2/ አንድ ገንዘብ ያዥ እና አንድ ሒሳብ ክፍል ይኖሩታል። ገንዝብ ያዡ ከደረሰኞች ጋር ሒሳብ ክፍሉም ከገንዘቡ ጋር እንዳይገናኙ የሥራ ክፍፍል ባለበት ሁኔታ ይሠራሉ። ይህን የተመለከተ ዝርዝር የፋይናንስ ሥርዓት በፋይናንስ መመሪያ ሊዘጋጅ ይችላል።
            <br />7.3/ የአባላት ወርኃዊ መዋጮ እና ቅጣቶችን እንዲሁም የመመዝገቢያ ክፍያ በአግባቡ በጊዜው ይሰበሰባል፤ ውዝፍ ክፍያዎችን ለሥራ አስፈጻሚው እንዲሁም ለአባላቱ ያሳውቃል፤ እንደየአስፈላጊነቱ ውሳኔ እንዲሰጥባቸውም ያደርጋል።
            <br />7.4/ ለሰበሰበው ገንዘብ የማኅበሩን ደረሰኝ ይሰጣል በአንድ ሳምንት ውስጥም ባንክ ያስገባል ያስገባበትንም ደረሰኝ ፋይል አድርጎ ያስቀምጣል።
            <br />7.5/ በዚህ መተዳደሪያ ደንብና በአባላቱ ስብሰባ የተላለፉ ክፍያዎች ወይም ወጪዎችን በሒሳብ ሹሙ አማካኝነት ሥራ አስፈጻሚውን ይጠይቃል፣ አጸድቆ ወጪ ያደርጋል።
            <br />7.6/ የማኅበሩን ወጪና ገቢ ደረሰኞች ይይዛል።
            <br />7.7/ ተገቢዉን ግልጽ የገቢና ወጭ ሰነዶች በዘመናዊ የሒሳብ መዝገብ አያያዝ ይይዛል።
            <br />7.8/ እንደየአስፈላጊነቱ የሒሳብ ሪፖርቶችን ያዘጋጃል።
            <br />7.9/ የማኅበሩ አባላት በፋይናንስ፣ ሞርጌጅ፣ ስቶክ ገበያ እና በመሳሰለው ያላቸውን እውቀት እንዲያዳብሩ የሚያግዙ መረጃዎችን እንደየአስፈላጊነቱ ያቀርባል።</h3>
                <h2>8/ የማኅበራዊ ንዑስ ኮሚቴ</h2>
                <h3>ተጠሪነቱ ለሥራ አስፈጻሚ ኮሚቴ ሆኖ የሚከተሉት የሥራ ድርሻና ኃላፊነት ይኖሩታል።
            <br />8.1/ ኮሚቴዉ የሥራ አስፈጻሚ አባል በሆነ አንድ ሰብሳቢ ይመራል። <br />8.2/ በሥሩ እንደየአስፈላጊነቱ የሚሳተፉ አባላት ይኖሩታል።
            <br />8.3/ የማኅበሩ አባል ያልሆኑ ኢትዮጵያውያንና ትውልደ ኢትዮጵያዊያንን አባል ለማድረግ እቅድ አውጥቶ ይንቀሳቀሳል።
            <br />8.4/ በአባላት ላይ የሚከሰቱ ሥራ ነክ ችግሮችን ወይም በአባላትና ቤተሰቦቻቸው ላይ የሚደርሱ የሐዘን ክስተቶች በመከታተል እንዳስፈላጊነቱ በመተዳደሪያ ደንቡ መሠረት እገዛ የሚደረግበትን ሐሳብ ያቀርባል፤ ሲፈቀድለትም ያስፈጽማል።
            <br />8.5/ አባላት በማኅበራዊና ሥራ ነክ ጉዳዮች ላይ ተሳትፎ እንዲያደርጉ መረጃውን ያስተላልፋል፣ ሁኔታዎችን ያመቻቻል።
            <br />8.6/ አባላትና እንደአስፈላጊነቱ ቤተሰቦቻቸው በዓመት 1 ግዜ የሚገናኙበትን ሁኔታ ያመቻቻል፤ ሌሎች በአባላት መካከል ማኅበራዊ ግንኙነቶች የሚጠናከሩበትን ሐሳብ ያቀርባል።

            <br />8.7/ በኢትዮጵያውያን እና በትውልደ ኢትዮጵያውያን ማኅበረሰብ ውስጥ ማኅበሩ በበጎ አድራጎት ዘርፍ ተሳትፎ የሚያደርግበትን ሁኔታ ያመቻቻል።</h3>
                <h2>9/ የኮንትራትና ሕግ ንዑስ ኮሚቴ</h2>
                <h3>ተጠሪነቱ ለሥራ አስፈጻሚ ኮሚቴ ሆኖ የሚከተሉት የሥራ ድርሻና ኃላፊነት ይኖሩታል።
            <br />9.1/ ኮሚቴዉ የሥራ አስፈጻሚ አባል በሆነ አንድ ሰብሳቢ ይመራል። <br />9.2/ በሥሩ እንደየአስፈላጊነቱ የሚሳተፉ አባላት ይኖሩታል።
            <br />9.3/ በኪንግ ካውንቲ ሜትሮ ያሉ ሕጎች፣ ደንቦች፣ኮንትራት፣ ፖሊሲዎችና መመሪያዎች ላይ አባላቱን በማወያየት ግንዛቤ እንዲዳብር ያግዛል።
            <br />9.4/ እነዚህን ሕጎችና ደንቦች ጠንቅቆ መረዳት፣ መተርጎምና በሥራ ላይ ማዋል የእያንዳንዱ አባል ኃላፊነት ይሆናል። <br />9.5/ በየጊዜዉ በአባላት ላይ የሚፈጠሩ የሥራ ላይ ክስተቶች ሲኖሩ ከፖሊሲና ደንቦች አኳያ የዉይይት መድረክ
            በመክፍት በተፈጠረው ችግር ላይ ምክረ ሐሳብ ያቀርባል።
            <br />9.6/ አባላት የሙያ እድገት እንዲያገኙ ሐሳቦችን ያቀርባል፣ ያነሳሳል፣ ይደግፋል፣ ያበረታታል።</h3>
                <h2>10/ የሴፍቲና ጤና ንዑስ ኮሚቴ</h2>
                <h3>ተጠሪነቱ ለሥራ አስፈጻሚ ኮሚቴ ሆኖ የሚከተሉት የሥራ ድርሻና ኃላፊነት ይኖሩታል። <br />10.1/ ኮሚቴዉ የሥራ አስፈጻሚ አባል በሆነ አንድ ሰብሳቢ ይመራል።
            <br />10.2/ በሥሩ እንደየአስፈላጊነቱ የሚሳተፉ አባላት ይኖሩታል።
            <br />10.3/ በአባላት መካከል ጤንነትን በተመለከተ ውይይት በማድረግ የተሻለ የጤና ግንዛቤን ለመፍጥር የሚያስችል
            መረጃ ያቀርባል።
            <br />10.4/ ከሥራ ላይ ደኅንነት ወይም ሴፍቲ ጋር የተያያዙ ጠቃሚ መረጃዎችን በማሰባሰብ ለአባላት ያቀርባል።
            <br />10.5/ ከፍተኛ ሴፍ የሆነ የሥራ ልምድ ያካበቱ አባላት ያላቸውን የጥንቃቄ ልምዳቸውን (safety culture) ለአባላት እንዲያካፍሉ ያደርጋል፤ ሌሎችም ከሴፍቲ ጋር ተያያዥነት ያላቸውን ተግባራት ያከናውናል።
            <br />10.6/ ለሥራችን የሚጠቅሙ የሰውነት ብቃት እንቅስቃሴዎችን ከተለያዩ ምንጮች በመሰብሰብ ለአባላት ያቀርባል፤ አባላትን በማስተባበር እንደየአመቺነቱ የጤና ቡድን ያደራጃል፣ ያስተባብራል፣ ይመራል።
            <br />10.7/ በየጊዜው የሚወጡ ከሰውነት ብቃትና አመጋገብ ጋር የተያያዙ ሳይንሳዊ ትንታኔ መረጃዎችን ለአባላቱ ያሳውቃል።</h3>
                <h2>11/ የቁጥጥር (Oversight) ኮሚቴ</h2>
                <h3>ተጠሪነቱ ለጠቅላላ ጉባኤ ሆኖ የሚከተሉት የሥራ ድርሻና ኃላፊነት ይኖሩታል።
            <br />11.1/ ኮሚቴዉ በጠቅላላ አባላቱ ስብሰባ የሚመረጡ አንድ ሰብሳቢ እና ሁለት አባላት ይኖሩታል።
            <br />11.2/ የሥራ ዘመኑ ሦስት ዓመት ይሆናል።
            <br />11.3/ አባላቱ በተከታታይነት ከሁለት ጊዜ በላይ ማገልገል አይችሉም።
            <br />11.4/ በሥራ አስፈጻሚው የሚደረጉ የሥራ እንቅስቃሴዎች ከመተዳደሪያ ደንቡ አንጻር መሆኑን ይገመግማል፤ የአሠራር ክፍተቶችና ችግሮች ሲስተዋሉ የመፍትሔና ማሻሻያ ሐሳብ ለጠቅላላ ጉባዔ ያቀርባል።
            <br />11.5/ ዓመታዊ የማኅበሩን ሒሳብ ሪፖርት ይመረምራል ለጠቅላላ አባላቱ ተዓማኒነቱን ያረጋግጣል፤ አስፈላጊ ሲሆን የውጭ አጣሪ ወይም ኦዲተር እንዲሰየም ያቀርባል፣ ይከታተላል።
            <br />11.6/ በማኅበሩ ሕልውና ላይ የሚመጣ መሠረታዊ የደንብ ጥሰት ወይም የአሠራር ችግር ወይም አላግባብ ሥልጣንን የመጠቀም ሁኔታዎች በሥራ አስፈጻሚው ሲደረግና በማስረጃ ሲደገፍ አስቸኳይ ጠቅላላ ጉባኤ በመጥራት ለጠቅላላው አባላት ያስታውቃል።
            <br />11.7/ በማኅበራዊ ንዑስ ኮሚቴ ቀርቦ በሥራ አስፈጻሚው የተወሰነ የማኅበራዊ በጎ አድራጎት ድጋፍን ምክረ ሐሳብ /ፕሮፖዛል/ ይገመግማል፣ ተፈጻሚነቱንም ያረጋግጣል።
            <br />11.8/ የማኅበሩ የፋይናንስ አቅም የሚያድግበትን ሐሳብ ለጠቅላላ ጉባዔ አቅርቦ በሥራ አስፈጻሚው እንዲፈጸም ያስወስናል።
            <br />11.9/ አስፈላጊ ሆኖ ሲገኝ በሰብሳቢው አማካኝነት ከማኅበሩ ሊቀመንበሩ በተጨማሪ በሕግ ፊት ማኅበሩን ይወክላል።
            <br />11.10/ ከአባላት በሥራ አስፈጻሚ ላይ የሚቀርብ ቅሬታ፣ በደል እና አስተያየት ይመረምራል፤ ቅራኔዎችን ያሸማግላል፤ በሥራ አስፈጻሚው የታገደ አባልን ጉዳይ መርምሮ አስፈላጊ ሆኖ ሲገኝ ለጠቅላላ ጉባዔ ውሳኔ ያቀርባል።
            <br />11.11/ የማኅበሩ የሥራ አስፈጻሚ ምርጫን የአስመራጭ ኮሚቴ ሚና በመጫወት ያስፈጽማል፤ የሥራ አስፈጻሚውን ሥልጣን ሽግግር ወይም ርክክብ ያስተባብራል።</h3>
                <h1>አንቀጽ 21. የማኅበሩ በጀት ዓመት</h1>
                <h3>የማኅበሩ የበጀት ዓመት እ.አ.አ ከጥር 1 ቀን እስከ ታኅሣሥ 31 ቀን (January 1st to December 31st) ድረስ
            ይሆናል።</h3>
                <h1>አንቀጽ 22. ስለማኅበሩ ገንዘብ አያያዝና አጠቃቀም</h1>
                <h3>1/ ማኅበሩ ከአባላት የሚሰበስበው መመዝገቢያ ክፍያ፣ ወርኃዊ መዋጮ እና መቀጫዎች በማኅበሩ ስም በተከፈተ
                የባንክ ሒሳብ ውስጥ ይያዛል።
            <br />2/ በማኅበሩ ስም የሚከፈተው ባንክ ሒሳብ የቁጠባ (Saving)፣ ተንቀሳቃሽ (Checking) ወይም Trust fund ሊሆን ይችላል።
            <br />3/ ማኅበሩ የሒሳብ እንቅስቃሴውን እና የገንዘብ አያያዙን የሚከታተልበት የሒሳብ መመሪያ (Financial Manual) ይኖረዋል።
            <br />4/ ማኅበሩ የሀገሪቱ ሕግ በሚፈቅደው መሠረት የገንዘብ አቅሙን ለማደርጀት በጠቅላላ ጉባኤ ስብሰባ ውሳኔ በኢንቨስትመንት እና ንግድ ሥራ (profit making business) ዘርፍ ሊንቀሳቀስ ይችላል።
            <br />5/ የማኅበሩ ገንዘብ ጥቅም ላይ የሚውለው በዚህ መተዳደሪያ ደንብ ለተጠቀሰው ዓላማ ማለትም ለአባላቱና ቤተሰቦቻቸው በችግር ጊዜ ድጋፍ፣ በደስታ ወቅት የአብሮነት መግለጫ ስጦታ፣ በማኅበሩ ንዑሳን ኮሚቴዎች ለሚከናወኑ ሥራና ሙያነክ ተግባራት እንዲሁም በአባላቱ በአብላጫ ድምጽ በሚወሰን መሠረት በኢትዮጵያም ሆነ ከኢትዮጵያ ውጭ ለሚደረጉ የኢትዮጵያውያንና ትውልደ ኢትዮጵያውያን በጎ አድራጎት እንቅስቃሴዎች ድጋፍ ብቻ ይሆናል።
            <br />6/ የማኅበሩ መጠባበቂያ (reserve) ገንዘብ በማናቸውም ጊዜ ከሃያ አራት ሺ /24,000/ ዶላር አያንስም፤ የማኅበሩ የሒሳብ መመሪያ ይህን እንዲያንፀባርቅ ሆኖ በየዓመቱ መጠባበቂያ ገንዘቡን የሚያሳድግበት ከጠቅላላው የአባላት መዋጮና ገቢ በመቶኛ (percentage) አካቶ መያዝ አለበት።
            <br />7/ የፋይናንስ ኮሚቴ በሚያስታውቀው የሒሳብ ሪፖርት መሠረት የማኅበሩ ሒሳብ መጠባበቂያ ገንዘቡ ላይ ከደረሰ ለአባላት የሚደረጉ የገንዘብ ድጋፎች ሁሉ በሥራ አስፈጻሚው በሚወሰነው መሠረት በአባላቱ መዋጮ ይሸፈናሉ።</h3>
                <h1>አንቀጽ 23. ስለ ንብረትና ሒሳብ ቁጥጥር</h1>
                <h3>1/ አግባብ ያለው የመንግሥት ባለሥልጣን አስፈላጊ መሆኑን ሲያምንበት በማንኛውም ጊዜ ራሱ ወይም እሱ በሚወክለው ሰው /ባለሙያ/ የማኅበሩን የሥራ አፈጻጸም መዛግብትና የገንዘብ አጠቃቀምና የአያያዝ ሁኔታ ቁጥጥር ወይም ምርመራ ሊያደርግ ይችላል።
            <br />2/ በየዓመቱ የበጀት መዝጊያ ላይ የንብረትና ሒሳብ ውስጥ ቁጥጥር ይደረጋል፤ ለአባላቱም ሪፖርት ይቀርባል። <br /> 3/ የቁጥጥር ሥራ ቢዘገይ የበጀት ዓመቱ ባለቀ በሁለት ወር ጊዜ ውስጥ ይካሄዳል።
            <br />4/ በማናቸውም ወቅት የአሠራር ግድፈትና የሒሳብ ጉድለት እንዳለ ያሰበ አባል ቅሬታ ወይም ጥቆማውን ለቁጥጥር ኮሚቴ በጽሑፍ ማቅረብ ይችላል።

            <br />5/ በዚህ አንቀጽ ንዑስ አንቀጽ 4 መሠረት በጽሑፍ የቀረበ ቅሬታ ወይም ጥቆማን የቁጥጥር ኮሚቴ ተገቢ ሆኖ ሲያገኝው ይመረምራል፤ ምርመራ ካላስፈላገውም ላቀረበው አባል ምክንያቱን ያስታውቃል።
            <br />6/ በማናቸውም ወቅት ከጠቅላላው አባላት ቢያንስ አንድ ሦስተኛው በውጭ ኦዲተር የሒሳብ ምርመራ እንዲደረግላቸው በማመልከቻ ሲጠይቁ ፍቃድ ባለው ባለሙያ ምርመራ ይደረጋል።
            <br />7/ የውጭ ባለሙያ (Auditor) የሒሳብ ቁጥጥር እና የምርመራ ውጤት በይፋ ሊገኝ በሚችል ሁኔታ በማኅበሩ እና አስፈላጊ ከሆነ አግባብ ባለው የመንግሥት አካል ዘንድ ይቀመጣል።</h3>
                <h1>አንቀጽ 24. በንብረትና ገንዘብ ላይ ጉድለት ሲደርስ ስለሚወሰዱ እርምጃዎች</h1>
                <h3>1/ የማኅበሩ የሒሳብ ቁጥጥር ወይም ምርመራ በሚደረግበት ጊዜ የማኅበሩን ሥራ እንዲያካሂድ ኃላፊነት የተጣለበት
                ወይም ተጥሎበት የነበረ ማንኛውም አባል፤
            <br />ሀ/ ከማኅበሩ መተዳደሪያ ደንብ ውጭ ያልተፈቀደ ክፍያ ፈጽሞ ከተገኘ፣
            <br />ለ/ እምነት በማጉደል ወይም በቸልተኝነት በማኅበሩ ንብረት ወይም ገንዘብ ላይ ጉድለት አድርሶ ከተገኘ ወይም ለጉዳት ከዳረገ፣
            <br />ሐ/ የማኅበሩ የሆነን ገንዘብ አለአግባብ የወሰደ ወይም የሐሰት ማስረጃ ያቀረበ፣ ሰነዶች ያጠፋ ወይም የሰረዘ፣
            <br />መ/ የማኅበሩን ንብረት ወይም ገንዘብ በማጭበርበር ለራሱ ጥቅም ያዋለ ወይም በዚህ የተባበረና ያሴረ እንደሆነ፤ የቁጥጥር ኮሚቴው ወይም እንደ አግባብነቱ የውጭ መርማሪው ስለሁኔታው ዝርዝር ማስረጃዎችን በማዘጋጀት ለማኅበሩ ጠቅላላ ጉባኤ ሪፖርት ያደርጋል።
            <br />2/ ከላይ በቀረበ የቁጥጥር ሪፖርት መሠረት የሚመለከተው አባል በ15 ቀናት ውስጥ መልስ እንዲያቀርብ ዕድል ይሰጠዋል።
            <br />3/ ባለጉዳዩ አባል በተሰጠው ጊዜ ገደብ መልስ ካላቀረበ የቁጥጥር ኮሚቴው አስቸኳይ ስብሰባ በመጥራት ለጠቅላላ ጉባኤው ለውሳኔ ያቀርባል።
            <br />4/ በጠቅላላ ጉባኤ የጥፋተኝነት ውሳኔ ሲተላለፍ የጎደለው ገንዘብ ወይም ንብረት ከነወለዱ እንዲሁም የሚወሰነውን ካሳና ኪሳራ እንዲከፈል ማኅበሩ በሕግ አግባብ ይጠይቃል።</h3>
                <h1>አንቀጽ 25. ስለማኅበሩ መፍረስና የንብረት ውርስ</h1>
                <h3>1/ ማኅበሩ በሚከተሉት ምክንያቶች ሊፈርስ ይችላል።

            <br />ሀ/ ከ 90% በላይ አባላቱ በጠቅላላ ጉባኤ የውሳኔ ድምጽ ሲሰጥ፣<br /> ለ/ ፍርድ ቤት እንዲፈርስ ሲወስን፣
            <br />ሐ/ የማኅበሩ አባላት ቁጥር ከሁለት ካነሰ።
            <br />2/ ማኅበሩ በሚፈርስበት ወቅት የሒሳብ ምርመራ ተደርጎ በሚቀርበው ሪፖርት መሠረት ያለው ጠቅላላ ገንዘብና ንብረት በጠቅላላ ጉባኤ አብላጫ ድምጽ ይወሰናል።</h3>
                <h1>አንቀጽ 26. ስለማኅበሩ የሥራ ዘመን</h1>
                <h3>ማኅበሩ በአንቀጽ 25/1/ መሠረት እንደተገለጸው ካልሆነ በቀር የሥራ ዘመኑ ላልተወሰነ ጊዜ ነው።</h3>
                <h1>አንቀጽ 27. ስለማኅበሩ መዛግብትና ሰነዶች</h1>
                <h3>1/ ማኅበሩ በስሙ የተዘጋጁ ተከታታይ ቁጥር ያላቸው ገቢና ወጪ ደረሰኞች ይጠቀማል።
            2/ ማናቸውም የማኅበሩ መዛግብት፣ ሰነዶች እና ደጋፊ ማስረጃዎች ቢያንስ ለአሥር ዓመት ይቀመጣሉ።</h3>
                <h1>አንቀጽ 28. ስለመተዳደሪያ ደንብ መሻሻል</h1>
                <h3>1/ ይህ መተዳደሪያ ደንብ ማንኛውም አባል፣ ንዑሳን ኮሚቴዎች፣ እንዲሁም ሥራ አስፈጻሚውና ቁጥጥር ኮሚቴው እንዲሻሻል በጽሑፍ የመነሻ ሐሳብ ሲያቀርቡና በጠቅላላው ጉባኤ ሲታመንበት በማንኛውም ጊዜ ሊሻሻል ይችላል።
            <br />2/ በዚህ አንቀጽ ንዑስ አንቀጽ 1 ከላይ የተጠቀሰው እንዳለ ሆኖ በመተዳደሪያ ደንቡ አንቀጽ 8 እና 9 የተቀመጡት መርሖ እና እሴት የማይሻሻሉ የማኅበሩ መሠረቶች ናቸው።
            <br />3/ በዚህ አንቀጽ ንዑስ አንቀጽ 1 መሠረት የተሻሻለው መተዳደሪያ ደንብ በጠቅላላ ጉባኤው ጸድቆ እና ሥልጣን ባለው የመንግሥት አካል ቀርቦ ከተመዘገበበት ቀን ጀምሮ የጸና ይሆናል።</h3>
                <h1>አንቀጽ 29. የማኅበሩ ዓርማና ማኅተም</h1>
                <h3>ማኅበሩ የራሱ የሆነ ራዕይና ዓላማውን የሚያንጸባርቅ በጠቅላላ ጉባኤ የሚጸድቅ ዓርማና ማኅተም ይኖረዋል።</h3>
                <h1>አንቀጽ 30. ጠቅላላ</h1>
                <h3>1/ የማኅበሩ መተዳደሪያ ደንብ በእንግሊዘኛ ሊተረጎም ይችላል። ማኅበሩ መደበኛ መግባቢያ ቋንቋው አማርኛ እንደመሆኑ መጠን በአማርኛውና በእንግሊዘኛው ትርጉም መካከል መሠረታዊ የሐሳብ ልዩነት ቢገኝ የአማርኛው ቅጂ ተቀባይነት ይኖረዋል።
            <br />2/ በዚህ መተዳደሪያ ደንብ በወንድ ጾታ የተጠቀሰ ሁሉ ለሴት ጾታም ይመለከታል።
            </h3>
            </div >
        </div>
    )
}

export default Bylaw