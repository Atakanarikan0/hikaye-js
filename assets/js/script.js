let path = Number(prompt('Arkania Krallığı, Altın Kitap çalındıktan sonra karanlığa gömüldü. Kitabı bulacak kişi krallığı kurtaracaktı. Genç kaşif Lara, bu sırrı çözmeye kararlıdır. Eski bir harita onu üç tehlikeli diyara götürür:\n 1. Sisli Orman  \n 2. Gölge Mağaraları \n 3. Taş diyarı'));

if(path == 1) {
  let foggyForest = Number(prompt("Lara, sisli ormanın derinliklerine adım attığında garip bir sessizlik hisseder. Ağaçlar canlıymış gibi hareket ediyor ve sislerin arasında garip şekiller dans ediyordu. Bir süre ilerledikten sonra karşısına yaşlı bir büyücü çıkar. Büyücü ona iki yol gösterir: \n 1.Büyülü bir pusula kullanarak ormanın gizli geçidini bulmak. \n 2.Eski bir şifreyi çözerek ormanın sırlarını açığa çıkarmak."))
  if (foggyForest == 1) {
    let magicCompass = Number(prompt('Lara, büyülü pusulayı alarak ormanın derinliklerine doğru yola çıktı. Pusula sürekli yön değiştiriyor, ama ona rehberlik ediyordu. Bir süre sonra karanlık bir geçit belirdi; girişinde iki devasa heykel duruyordu. Heykellerin önünde bir yazıt vardı: \n "Kendini kanıtla, cesaretini göster; doğru sözü söyleyen, geçidi geçer." Laranın iki seçeneği vardı: \n 1.Cesaretle heykellerle yüzleşip doğru sözü söylemek. \n 2.Büyülü pusulayı kullanarak doğru yolu bulmaya çalışmak.'))
    if (magicCompass == 1) {
      alert('Lara, cesaretle heykellerin önüne yaklaştı. "Doğruyu arıyorum ve korkularımdan besleniyorum!" dedi. Heykeller, bu cesareti takdir ederek geçidin kapısını açtı. Lara, bilgileri elde ederek Arkania Krallığına döndü ve halkıyla paylaştı. Artık bir kahramandı.')
    }else if (magicCompass == 2) {
      alert('Lara, büyülü pusulayı dikkatle inceledi. Pusula, geçidin etrafındaki gizli yolları gösteriyordu. Bu yoldan geçerek, heykellerin etkisinden kurtuldu. Lara, bilgileri elde ederek Arkania Krallığına döndü ve krallığı kurtardı. Kahraman olarak anıldı.')
    }
  }else if (foggyForest == 2) {
    let password = Number(prompt("Büyücü, parşömeni Lara’ya uzattı. Üzerindeki semboller ve kadim yazılar, ormanın sırlarını taşıyordu. Lara, şifreyi çözerek eski bilgileri açığa çıkarmak istiyordu, ancak bu zorlu ve zaman alıcıydı. Bir anda arkasında hışırtı duydu ve bir gölge belirdi. İki seçeneği vardı: \n 1.Şifreyi çözmeye devam etmek. \n 2.Gölgeden kaçmak."));
    if (password == 1) {
      let decipher = Number(prompt("Lara, parşömeni alarak sembolleri çözmeye başladı. Zamanla, bu sembollerin gizli bir geçidin haritasını oluşturduğunu fark etti. Ancak tam o sırada gölge tekrar yaklaştı. Artık iki seçeneği vardı: \n 1.Geçidin yerini bulup ilerlemek: Ormanın sırlarını keşfedebilirdi. \n 2.Gölgeyle yüzleşmek: Gölgeye karşı durmayı deneyebilirdi."))
      if (decipher == 1) {
        alert("Lara, gizli geçidin yerini bulmak için yola çıktı. Haritada belirtilen noktaya ulaştığında, eski sembollerle kaplı bir kapı buldu. Kapıyı açtığında, ışık dolu bir odaya girdi ve Altın Kitap’ı buldu. Kitabı okuduğunda, krallığı kurtaracak bilgileri öğrendi ve Arkania Krallığı'na barışı geri getirdi.")
      }else if (decipher == 2) {
        alert("Lara, cesurca gölgeye meydan okudu: “Ben Altın Kitap’ı bulmak için buradayım!” Gölge, kararlılığını görünce ona geçidin yerini söyledi. Beraber ormanın derinliklerine gittiler ve Altın Kitap’ı buldular. Lara, krallığı kurtaracak bilgileri öğrendi ve Arkania Krallığı'na barışı geri getirdi.")
      }
    }else if (password == 2) {
      let run = Number(prompt("Lara, gölgede beliren hışırtıyı duyduğunda, korkuyla arkasına bakmadan kaçmaya karar verdi. Dallar yüzüne çarparken, kalbi hızla atıyordu. Gölge peşinden geliyordu ama o daha hızlı koşmaya devam etti. Sisler kalınlaştı ve görüş mesafesi daraldı. Karşısında iki yol belirdi: \n 1-Dar geçidi seçmek: Tehlikeli ama belki de kaçışın anahtarı. \n 2-Açık alana çıkmayı denemek: Daha geniş bir alan ama gölgelerin görünme ihtimali yüksek."))
      if (run == 1) {
        alert("Lara, korkusunu yenerek dar geçidi seçti. Sislerin arasında hızla ilerlerken, geçit daraldıkça karanlık yoğunlaştı. Arkasındaki gölge sesi azalırken, kapıya ulaştı. Kapı açıldığında, ona ışık dolu bir oda sunuldu. Lara, içeri girdi ve Altın Kitap’ı buldu. Kitap, krallığın kurtuluşu için gereken bilgileri içeriyordu. Lara, Altın Kitap’ı alarak Arkania Krallığı'na barışı geri getirdi ve bir efsane olarak anılmaya başladı.")
      }else if (run == 2) {
        alert("Lara, gölgelerin riskine rağmen açık alana çıkmayı denedi. Geniş alanda, bir grup yeraltı yaratığıyla karşılaştı. Korkmadan, “Ben Altın Kitap’ı bulmak için buradayım!” dedi. Yaratıklar, cesaretini görünce geri adım attı ve ona geçidi gösterdiler. Lara, Altın Kitap’ı bulduğu odaya girdi ve krallığın kurtuluşunu sağlayacak bilgileri öğrendi. Arkania Krallığı'na barışı geri getirerek kahraman olarak anılmaya başladı.")
      }else {
        alert("Hikaye yarım kaldı. Baştan başlayınız.")
      }
    }else {
      alert("Hikaye yarım kaldı. Baştan başlayınız.")
    }
  }else {
    alert("Hikaye yarım kaldı. Baştan başlayınız.")
  }
}else if(path == 2) {
  let caves = Number(prompt("Lara, mağaraların karanlık dehlizlerine adım attığında, yeraltı dünyasının soğuk nefesi yüzünü yaladı. Burada ilerlemek zor olacak. Mağara içinde, yeraltı yaratıkları tarafından korunan kadim bir kapı var. Kapı, krallığın en derin sırlarını saklıyor. Ama bu kapıya ulaşmak için iki seçeneği var: \n1.Gölgelerin koruduğu yolu takip edip doğrudan kapıya gitmek. \n2.Yeraltı nehrini kullanarak kapıya farklı bir yoldan ulaşmak."))
  if (caves == 1) {
    let shadow = Number(prompt('Lara, cesaretle gölgeleri takip etmeye karar verdi. Karanlığın içindeki fısıldayan sesler eşlik ederken, kadim sembollerle kaplı kapının önüne geldi. Doğru şifreyi bulması gerekiyordu.Tam o anda kapı açıldı ve karanlık bir sis içeri yayıldı. Altın ışıltılarla dolu bir hazine odasının ortasında bir yeraltı yaratığı belirdi. Yaratık derin bir sesle sordu: \n“Gözleri yok, ama her şeyi görebilir. Nedir?” \n\n 1- Ayna \n 2- Hayal'));
    if (shadow == 1) {
      alert('Lara, "Ayna!" diye yanıtladı. Yaratık, bir an duraksadı ve ardından gülümseyerek başını salladı. “Doğru cevap! Ayna her şeyi yansıtır. Hazine senindir!” dedi. Kapı aniden açıldı ve içeriye ışık doldu. Lara, altınlarla dolu odaya girdi. Krallığın kaybolan hazinesini bulmuştu ve bununla birlikte güç kazanarak Arkania Krallığına barışı geri getirdi.')
    }else if (shadow == 2) {
      alert('Lara, “Hayal!” dedi. Yaratık, düşünceli bir ifadeyle onu dinledi ama ardından hüzünle başını salladı. “Yanlış cevap. Hayal gözleri yoktur ama görmeyi ister. Artık bu hazineye ulaşamazsın!” Lara, yaratığın sözleriyle geri itildi ve karanlık dehlizlere dönmek zorunda kaldı. Ancak kararlılığı sayesinde yeni yollar aramaya devam etti, çünkü umudunu kaybetmemeliydi.')
    }else {
      alert("Hikaye yarım kaldı. Baştan başlayınız.")
    }
  }else if (caves == 2) {
    alert("Lara, yeraltı nehrini kullanmaya karar verdi. Suya daldı ve ilerlerken dev bir su yaratığıyla karşılaştı. Dikkatini dağıtmak için suya bir taş attı ve hızlıca karşı kıyıya geçti. Yaratık sesin peşine düştü ve Lara, kayaların arasından kadim kapıya ulaştı. Kapının üzerinde Altın Kitap’ın sembolü parlıyordu.")
  }else {
    alert("Hikaye yarım kaldı. Baştan başlayınız.")

  }
}else if (path == 3) {
  let stone = Number(prompt("Lara, devasa taş heykellerin arasına adım attığında, heykellerin üzerinde garip semboller olduğunu fark eder. Bir efsaneye göre, bu heykellerin her biri eski bir kahramanın ruhunu taşımaktadır. Lara, iki farklı heykelin önünde durur: \n 1.Kılıç taşıyan bir savaşçı heykeli – Bu heykelin ruhu, krallığın eski savunucularından biridir. \n 2.Bilgelik taşıyan bir bilge heykeli – Bu heykelin ruhu, eski büyüler ve sırlarla dolu bir bilgedir." ))
  if (stone == 1) {
    let warrior = Number(prompt("Lara, cesaretle kılıç taşıyan savaşçı heykelini seçti. Heykelin ruhu, ona eski savaşların sırlarını ve krallığı korumak için gereken stratejileri öğretti. Aniden, heykel bir kapıyı açan gizli bir geçidi ortaya çıkardı. Lara, bu geçitten geçerek daha derinlere inmeye karar verdi. Ancak karşısında beş seçenek belirdi ve her biri onu mutlu sona ulaştıracaktı: \n 1-Gizli geçitten hızla ilerlemek: Karanlıkta bekleyen tehlikeleri göze alarak, Altın Kitap'a en kısa yoldan ulaşmak. \n 2-Geçidi dikkatlice incelemek: Olası tuzakları kontrol ederek güvenli bir yol bulmak. \n 3-Savaşçı ruhuna teşekkür etmek: Onun bilgeliğinden daha fazla ders alarak, yeni stratejiler öğrenmek. \n 4-Heykelin etrafında döngü yaparak keşfetmek: Diğer taş heykellerin sırlarını açığa çıkararak, yeni güçler kazanmak. \n 5-Bir süre dinlenmek: Enerji toplayarak zihnini tazeleyip, ilerideki zorluklara hazırlıklı olmak."))
    if (warrior == 1) {
      alert("Lara, cesaretle gizli geçitten hızla ilerledi. Geçidin duvarları aydınlanırken, büyük bir kapıya ulaştı. Kapının üzerinde Altın Kitap’ın sembolü vardı. Kapıyı açtığında, ışık parladı ve Altın Kitap kürsüde belirdi. Kitabı alarak, krallığın kurtuluşu için gereken bilgileri öğrendi. Lara, Arkania Krallığı'na döndü ve barışı geri getirerek kahraman oldu.")
    }else if (warrior == 2) {
      alert("Lara, geçidi dikkatlice inceleyerek ilerledi. Duvarlardaki sembolleri araştırırken bir tuzağı fark etti ve güvenli bir yol buldu. Büyük bir kapıya ulaştığında, kapının üzerinde Altın Kitap’ın sembolü vardı. Lara, kapıyı açtı ve içeride muhteşem bir ışıkla karşılaştı. Altın Kitap’ı bulduktan sonra, Arkania Krallığı'na döndü ve halkını kurtardı. Artık bir kahramandı.")
    }else if (warrior == 3) {
      alert("Lara, kılıç taşıyan savaşçı heykeline teşekkür etti. Heykelin ruhu, ona cesaret ve stratejiler öğretti. Sonunda, heykel bir kapıyı açan gizli bir geçidi ortaya çıkardı. Lara, geçitten geçerek derinlere inmeye karar verdi. Altın Kitap’a ulaşarak, Arkania Krallığı'na döndü ve halkını kurtardı. Artık bir kahramandı.")
    }else if (warrior == 4) {
      alert("Lara, kılıç taşıyan heykelin etrafında döngü yaparak keşfetmeye karar verdi. Sembolleri inceleyerek gizli bir mekanizma buldu. Mekanizmayı harekete geçirdiğinde, yerden bir kapı açıldı. Kapının ardında Altın Kitap parlıyordu. Lara, kitabı alarak Arkania Krallığı'na döndü ve halkını kurtardı. Artık bir kahramandı.")
    }else if (warrior == 5) {
      alert("Lara, yorgunluk hissederek dinlenmeye karar verdi. Heykelin önünde oturup derin nefes aldı ve yaşadığı maceraları düşündü. Dinlendikten sonra zihni berraklaştı. Önünde büyük bir kapı belirdi. Kapının üzerinde Altın Kitap’ın sembolü vardı. Lara, kapıyı açarak Altın Kitap’a ulaştı. Arkania Krallığı'na döndüğünde, halkını kurtardı. Artık bir kahramandı.")
    }else {
      alert("Hikaye yarım kaldı. Baştan başlayınız.")
    }
  }else if (stone == 2) {
    alert("Lara, bilgelik taşıyan bilge heykelinin önünde durarak ona saygı gösterdi. “Bana rehberlik et, eski bilgeliğini paylaş,” dedi. Heykelin ruhu, Lara’ya güç vererek ona eski büyüler ve sırları öğretti. Bilgelik dolu sözleriyle Lara’nın zihni açıldı ve hedefini görmesine yardımcı oldu. Bir anda, heykelin önünde bir kapı belirdi. Lara, kapıyı açtığında ışıkla dolu bir odaya girdi. Ortada Altın Kitap duruyordu.")
  }else {
    alert("Hikaye yarım kaldı. Baştan başlayınız.")
  }
}else {
  alert("Yanlış cevap girdiniz.")
}
