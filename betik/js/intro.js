values = {
    "anasayfaGuest": [
        {
            element: ".topli-name",
            content: "Bayimiz olmak için Bayimiz Olun linkine tıklayarak ilgili forma ulaşabilirsiniz",
            placement: "bottom"
        }, {
            element: ".topli-exrate",
            content: "Günlük Kur bilgilerinin görülebildiği alandır",
            placement: "bottom"
        }, {
            element: ".topli-payment",
            content: "Ödeme İşlemleri ile Kart Oranlarına, Kart Çekimlerinize ve Banka Hesap Numaralarına ulaşabilirsiniz",
            placement: "left"
        }, {
            element: ".statusInUser",
            content: "Kullacını Adı ve Şifreniz ile bayi girişi yapabilirsiniz",
            placement: "left"
        }, {
            element: ".statusInBasket",
            content: "Satınalmak için sepete atılan ürünlere erişmenizi sağlar",
            placement: "left",
            backdropPadding: {
                left: -5
            }
        }, {
            element: ".catsMenuC",
            content: "Ürün kategorilerine hızlı kolay erişim imkanı sunar",
            backdropPadding: {
                bottom: 395
            }
        }, {
            element: ".searchIn",
            content: "Ürün arama ile marka, model, kategori, ürün adını akıllı arama ile hızlı sonuçlar almanızı sağlar"
        }, {
            element: ".markaSelect",
            content: "İstenilen markaya göre ürün arama yapmanız sağlar"
        }
    ],
    "anasayfaAuth": [
        {
            element: ".topli-name",
            content: "Bayi Paneline buradan erişebilirsiniz",
            placement: "bottom",
        },
        {
            element: ".topli-company",
            content: "Bayi Paneline buradan erişebilirsiniz",
            placement: "bottom",
        },
        {
            element: ".siparis-takibi-li",
            content: "Sipariş Takibini buradan yapabilirsiniz",
            placement: "bottom"
        },
        {
            element: ".statusInUser > form > ul > li:nth-child(2)",
            content: "Bayi Panelinde bulunan bazı özelliklere hızlı erişmek için bu kısayolları kullanabilirsiniz",
            placement: "top",
            backdropPadding: {
                top: 10,
                right: 410,
                bottom: 26
            },
            orphan: true,
            onShow: function() {
                var def = $.Deferred();
                setTimeout(function() {
                    $(".statusInUser").addClass("selected");
                    def.resolve();
                });
                return def.promise();
            }
        },
        {
            element: "ul.user-dropdown-menu li:first",
            content: "Müşteri Temsilciniz ve Erişim Bilgisi",
            // backdrop: false,
            orphan: true,
            placement: "bottom",
            onShow: function() {
                var def = $.Deferred();
                setTimeout(function() {
                    $(".statusInUser").addClass("selected");
                    def.resolve();
                });
                
                return def.promise();
            }
        },
    ],

    "/bayi/giris.php": [
        {
            element: ".loginPage > form > ul:nth-child(1) > li:nth-child(7) > a:nth-child(2)",
            content: "Şifrenizi unuttuysanız kayıtlı e-postanız ile şifrenizi sıfırlayabilirsiniz"
        }, {
            element: ".loginPage > form > ul:nth-child(3) > li > a:nth-child(2)",
            content: "Bayilik Sözleşmesi ve Kredi Kartı Ödeme Sözleşmesi detaylarına ulaşabilirsiniz"
        }
    ],

    "/bayi/panelim.php": [
        {
            element: "div.col.col15.fleft",
            content: "Bayi Panelinde bulunan tüm özelliklere erişmek için listelenen kısayolları kullanabilirsiniz"
        }, {
            element: "div.col.col45.fright > div > div:nth-child(1) > section:nth-child(1)",
            content: "Mevcut üyeliğiniz ile ilgili özet bilgileri görebilir ve güncelleyebilirsiniz"
        }, {
            element: "div.col.col45.fright > div > div:nth-child(2) > section:nth-child(1)",
            content: "Toplam ve Günü Gelen borcunuzun özet bilgisidir",
            placement: "left"
        }, {
            element: "div.col.col45.fright > div > div:nth-child(2) > section:nth-child(2)",
            content: "Siteniz üye siparişlerinizin özet bilgisidir",
            placement: "left"
        }, {
            element: "div.col.col45.fright > div > div:nth-child(2) > section:nth-child(3)",
            content: "Site üyeleriniz görüntülenir",
            placement: "left"
        }, {
            element: "div.col.col45.fright > div > div:nth-child(1) > section:nth-child(2)",
            content: "Teknik Serviste işlem gören ürünleriniz hakkında bilgilendirmeyi içerir"
        }
    ],

    "/bayi/sepet.php": [
        {
            element: ".sepetler-select",
            content: "Aktif sepet adınız bu bölümde görünmektedir. Ayrıca daha öncek kayıtlı sepetlere buradan ulaşılabilir"
        }, {
            element: "div.row.sepet-header > div > div:nth-child(3) > button:nth-child(1)",
            content: "Sepet adını değiştirebilirsiniz"
        }, {
            element: "div.row.sepet-header > div > div:nth-child(3) > button.delete.delete-basket.btn.btn-info",
            content: "Mevcut sepeti silebilirsiniz"
        }, {
            element: "div.row.sepet-header > div > div.pull-right > button",
            content: "Yeni boş bir sepet oluşturmak için kullanılır",
            placement: "left"
        }, {
            element: "div.col.col45.fright > div > div.sub-conC.basketC > ul.sepetim",
            content: "Sepetteki ürünlerin listesidir",
            placement: "top"
        }, {
            element: ".urun-stock:first",
            content: "Ürünlerin stok durumların bu alanda görülebilirsiniz",
            placement: "left"
        }, {
            element: ".urun-qty:first",
            content: "Sepetteki ürünün adeti bu alandan değiştirilebilir",
            placement: "left"
        }, {
            element: ".price:first",
            content: "Sepetteki ürün fiyatlarının görüldüğü alandır",
            placement: "left"
        }, {
            element: ".action:first",
            content: "Sepetteki ürünleri buraya tıklayarak satır bazında çıkarabilirsiniz",
            placement: "left"
        }, {
            element: "div.basket-resultC > table > tbody > tr:nth-child(4) > td:nth-child(1):parent",
            content: "Siparişe ait ödeme şeklinin seçildiği alandır"
        }, {
            element: "div.basket-resultC > table > tbody > tr:nth-child(2) > td:nth-child(3)",
            content: "Siparişe ait mevcut kur ile ara ve genel toplamların görülebilirdiği alandır",
            placement: "top"
        }, {
            element: "div.basket-resultC > table > tbody > tr:nth-child(5) > td:nth-child(1) > div > div > button",
            content: "Sipariş teslimat tipini bu alandan seçebilirsiniz. Kargo, Sevkiyat veya Depodan Teslim seçenekleri mevcuttur."
        }, /* {
            element: "null",
            content: "Sipariş teslimat adresinizi bu alandan değiştirebilirsiniz"
        }, {
            element: "null",
            content: "İlgili formu doldurarak yeni bir teslimat adresi tanımlayabilirsiniz"
        }, {
            element: "null",
            content: "Tanımlı tüm adreslerinizin listesine erişebilirsiniz"
        }, */
        {
            element: "#siparis_notu",
            content: "Siparişe dair notunuz varsa bu alandan girebilirsiniz. Bu not müşteri temsilciniz tarafından görülecektir.",
            placement: "top"
        }, {
            element: ".clear-basket",
            content: "Sepetteki tüm ürünleri boşaltmak için kullanılır"
        }, {
            element: "form[name=teklif_olustur]",
            content: "Siparişteki mevcut fiyatlar ile teklif oluşturabilirsiniz. % alanını kullanarak gireceğiniz kar marjı ile teklif buradaki orandan hesaplanarak oluşturulacaktır"
        }, {
            element: ".btnOrder",
            content: "Sipariş bu butona tıklanarak tamamlanır",
            placement: "left"
        }
    ],

    "/bayi/sepetlerim.php": [
    	{
            element: ".sub-conC.panelC > table",
            content: "Kaydedilen tüm sepetlerin listelendiği, tarih ve sepet adı ile aramaların yapılabildiği listedir",
            placement: "top"
        }
     ],

    "/bayi/siparislerim.php": [
     	{
            element: ".sub-conC.panelC table",
            content: "Geçmiş siparişleriniz bu bölümde listenir. Siparişe ait detaylar görülebilir. Sipariş no yazısına tıklayarak siparişin içerisine göz atılabilir",
            placement: "top"
        }, {
            element: "select[name=cari_kodu]",
            content: "Carileriniz arasında listelemeyi özelleştirebilirsiniz",
            placement: "left"
        }
     ],

    "/bayi/uye_siparisleri.php": [
        {
            element: ".us_filtre",
            content: "Üyelerinize ait sipariş takibini buradan yazapabilirsiniz. İlgili filtrelerle aramanızı özelleştirebilirsiniz.",
            placement: "top",
            backdropPadding: 15
        },
     ],

    "/bayi/bilgilerim.php":	[
        {
            element: ".form-bilgilerim",
            content: "Yetkili bilgileri detaylarını görebilir, değişiklik yapabilirsiniz",
            placement: "top",
            backdropPadding: 15
        }, {
            element: ".form-bilgilerim > div:nth-child(5) > div:nth-child(1) > div > button",
            content: "Yapılan değişiklikler kaydedilir"
        }, {
            element: ".form-bilgilerim > div:nth-child(5) > div:nth-child(2) > div > div > span:nth-child(1) > a",
            content: "Tüm yetkili listesine erişebilirsiniz",
            placement: "top"
        }, {
            element: ".form-bilgilerim > div:nth-child(5) > div:nth-child(2) > div > div > span:nth-child(2) > a",
            content: "Yeni yetkili ekleyebilirsiniz",
            placement: "left"
        }
     ],

    "/bayi/adreslerim.php":	[
        {
            element: ".adres_table:first",
            content: "Tanımlı tüm adreslerinizin listesidir"
        }, {
            element: ".btnUpdateAddress:first",
            content: "Adreslerde değişiklik yapmak için kullanılır"
        }, {
            element: ".btnDeleteAddress:first",
            content: "İlgili adresi siler"
        }, {
            element: ".btnSetDefaultAddress:first",
            content: "İlgili adresi varsayılan olarak seçer"
        }, {
            element: ".btnAddAddress:first",
            content: "İlgili formu doldurarak yeni bir teslimat adresi tanımlayabilirsiniz",
            placement: "left"
        }
     ],

    "/bayi/tekliflerim.php": [
        {
            element: ".col45 .sub-colC",
            content: "Sepette oluşturulmuş olan tekliflerin listelendiği bölümdür. Detay butonu ile Teklif detaylarına erişerek teklif oranı, ürün fiyatı değiştirebilir, teklif pdf yada excel olarak bilgisayarınıza indirilebilirsiniz. Sipariş oluştur butonu ile de teklifin içeriğine ait sipariş oluşturulabilir.",
            placement: "top"
        }
     ],

    "/destek/kart_oranlarimiz.php": [
        {
            element: ".col45.fright > div > div > table:nth-child(2)",
            content: "Kart oranlarını görebileceğiniz listeye erişebilirsiniz",
            placement: "top"
        }
     ],

    "/bayi/odeme.php": [
        {
            element: "#frmOdeme > div > div:nth-child(2) > .sub-cccon table",
            content: "Kart bilgileri bu alandan giriş yapılır",
            backdropPadding: {
                top: 10,
                right: 0,
                bottom: 10,
                left: 10
            }
        }, {
            element: "#frmOdeme > div > div:nth-child(2) > div.sub-cccon > table > tbody > tr:nth-child(5) td:first",
            content: "Ödeme 3D ise bu alan işaretlenir",
            placement: "top",
            backdropPadding: {
                top: 5,
                left: 10,
                right: 42
            }
        }, {
            element: ".sub-cccard",
            content: "Giriş yapılan bilgilere göre kart görüntüsünü görebilirsiniz",
            placement: "left",
            backdropPadding: {
                top: 10,
                right: 10,
                bottom: 10,
                left: -40
            }
        }, {
            element: ".table-odemeradio",
            content: "Çekim yapılacak tutara ilişkin detaylar bu alandadır",
            backdropPadding: 10
        }, {
            element: ".live_total_debt:first-child",
            content: "Toplam borcunuzu bu alana tıklayarak görebilir ve hızlı bir şekilde ödeme işlemini tamamlayabilirsiniz",
            placement: "top"
        }, {
            element: ".live_total_debt:last-child",
            content: "Günü Gelen borcunuzu bu alana tıklayarak görebilir ve hızlı bir şekilde ödeme işlemini tamamlayabilirsiniz",
            placement: "top"
        }, {
            element: "#cc-content-p > span",
            content: "Kur bilgilerinin görülebildiği alandır"
        }, {
            element: ".tbl-payment.tbl-taksitler",
            content: "Giriş yapılan bilgilere göre karta ait ödeme seçenekleri bu alanda listelenir",
            placement: "top"
        }
     ],

    "/bayi/odemelerim.php":	[
        {
            element: "div.col.col45.fright > div > div.sub-conC > div > table",
            content: "Geçmiş kart çekimleriniz bu bölümde listenir. Kart çekimlerine ait detaylar görülebilir.",
            placement: "top",
            backdropPadding: 10
        }, {
            element: ".cari_select",
            content: "Carileriniz arasında listelemeyi özelleştirebilirsiniz",
            placement: "left",
            backdropPadding: 4
        }, {
            element: ".paymentChange",
            content: "Tarih aralığını buradan değiştirebilirsiniz",
            placement: "left",
            backdropPadding: 4
        }
     ],

    "/bayi/odemeler.gunu.gelen.php": [
        {
            element: "div.col.col45.fright > div > div.sub-conC > div > table",
            content: "Borca karşılık gelen evraklar bu alanda listelenir. Kırmızı ile işaretlenen satırlar günü gelen ödemelerdir",
            placement: "top",
            backdropPadding: 10
        }
     ],

    "/bayi/cari.bilgiler.php": [
        {
            element: "div.col.col45.fright > div > div.sub-conC > table",
            content: "Cari bilgileriniz bu alanda görüntülenir",
            placement: "top",
            backdropPadding: 10
        }
     ],

    "/bayi/cari.hareketler.php": [
        {
            element: "div.sub-conC > div > table > thead > tr:nth-child(1) > th > div > select",
            content: "Cari hareketlerinizi bu alandan görüntüleyebilirsiniz. İlk tıklandığında default olarak Bugün işlemleri görüntülenir. Diğer hareketler için buradaki tarih aralığını seçebilirsiniz. Seçim sonrası Lütfen Bekleyin.. mesajı ardından listenize erişebilirsiniz",
            placement: "left",
            backdropPadding: 4
        }, {
            element: "table.tbl_titin",
            content: "Cari Hareket listesidir. Yeşil ile seçili alana tıklayarak fatura özet bilgisine erişebilirsiniz",
            placement: "top",
            backdropPadding: 10
        }, {
            content: "Pdf logosuna tıklayarak e-arşiv/e-faturanıza erişebilir, yazdırabilir, bilgisayarınıza indirebilirsiniz",
            orphan: true,
            backdrop: false
        }
     ],

    "/bayi/site_ayarlari.php": [
        {
            element: ".site_ayarlari > ul > li:nth-child(1)",
            content: "Sitenize ait logoyu burada görebilir, değiştirebilirsiniz",
            backdropPadding: 10
        }, {
            element: ".site_ayarlari > ul > li:nth-child(2)",
            content: "Sitenize ait iconu buradan değiştirebilirsiniz",
            backdropPadding: 10
        }, {
            element: ".site_ayarlari > ul > li:nth-child(3)",
            content: "Alan adınızı gireceğiniz alandır",
            backdropPadding: 10
        }, {
            element: ".site_ayarlari > ul > li:nth-child(4)",
            content: "Firma adınızı gireceğiniz alandır",
            backdropPadding: 10
        }, {
            element: ".site_ayarlari > ul > li:nth-child(5)",
            content: "Firma adresinizi gireceğiniz alandır",
            backdropPadding: 10
        }, {
            element: ".site_ayarlari > ul > li:nth-child(7)",
            content: "Firma telefonunuzu gireceğiniz alandır",
            backdropPadding: 10
        }, {
            element: ".site_ayarlari > ul > li:nth-child(8)",
            content: "Firma e-mail adresinizi gireceğiniz alandır",
            backdropPadding: 10
        }, {
            element: ".site_ayarlari > ul > li:nth-child(9)",
            content: "Teslim türü Kargo siparişlerde sipariş alt limiti altında kalan siparişlerden ne kadar kargo ücreti alınacağını girebileceğiniz alandır",
            backdropPadding: 10
        }, {
            element: ".site_ayarlari > ul > li:nth-child(10)",
            content: " Sipariş alt limitini belirleyebildiğiniz alandır. Bu rakamın altındaki siparişlere kargo ücreti yansıtılacaktır",
            backdropPadding: 10
        }, {
            element: ".site_ayarlari > ul > li:nth-child(11)",
            content: "Sitenizde yayınlanan fiyatlarını belirleyebildiğiniz alandır. Default seçim Oksid Son Kullanıcı + %5 tir. Fiyat grubu 1 den 5 e kadar kendiniz özelleştirebilirsiniz.",
            backdropPadding: 10
        }, {
            element: ".site_ayarlari > ul > li:nth-child(12)",
            content: "XML Key üretebilceğiniz alandır. Bu key i xml servislerinizde kullanabilirsiniz",
            backdropPadding: 10
        }, {
            element: ".site_ayarlari > ul > li:nth-child(13)",
            content: "Site tema rengini değiştirebildiğiniz alandır",
            backdropPadding: 10
        }, {
            element: ".col.col45 > div > div > form > div.row > div > button",
            content: "Tüm değişiklikleri kaydeder",
            placement: "top"
        }
    ],

    "/bayi/uyelerim.php": [
        {
            element: ".sub-conC.panelC .pagenum:first",
            content: "Harfi ile başlyayan kullanıcılar",
            placement: "left",
            backdropPadding: 4
        }, {
            element: ".sub-conC.panelC table",
            content: "Site üyelerinizi görüntüleyebilirsiniz. Onay ve Kredi Kartı ödeme seçeneklerini özelleştirebilirsiniz",
            placement: "top"
        },
    ],

    "/bayi/urun.php?id=0": [
        {
            element: "form[name=urun]",
            content: "Marka tanımları, kategori tanımları, stok ve satış bilgileri ve açıklamalarını belirleyerek kendinize ait ürünleri sitemizde yayına alabilmek için bu menüyü kullanabilirsiniz.",
            placement: "top"
        }
    ],

    "/bayi/bannerlarim.php": [
        {
            element: "div.col.col45.fright  .sub-conC.panelC",
            content: "Sitede yer alan banner alanlarını özelleştirebilirsiniz. 4 farklı banner seçeneği ve hangi sayfalarda bu bannerların yayına alındığı g özelleştirebilirsiniz"
        }
     ],

    "/bayi/fiyat-gruplari.php":	[
        {
            element: ".table-fiyat-gruplari",
            content: "Sitedeki fiyatları tüm kategorilerde 5 farklı dilimde Oksid Satış yada Oksid SK (son kullanıcı) fiyatları üzerine istenen kar marjı ekleyerek yayınlayabilirsiniz.",
            placement: "top"
        }
     ],

    "/bayi/banka_hesaplarim.php": [
        {
            element: "#bayi_banka_hesaplari",
            content: "Banka Hesap Numaraları sayfasında yayınlanan listeye kendinize ait banka hesap numaralarını tanımlayabileceğiniz menüdür.",
            placement: "top",
            backdropPadding: 5
        }
    ],

    "/bayi/garanti.sorgulama.php": [
        {
            element: "iframe:first",
            content: "Satınalmış olduğunuz ürünün garanti takibini sorgulayabileceğiniz menüdür",
            placement: "top"
        }
    ],

    "/destek/yetkili-servisler.php": [
        {
            element: "tbody",
            content: "Satınalmış olduğunuz ürünlere ilişkin yetkili servis istasyonlarını görebilir, herhangi bir teknik servis işleminde direkt olarak iletişime geçebilirsiniz",
            placement: "top"
        }
     ],

    "/bayi/teknik.servisteki.urunler.php": [
        {
            element: "iframe:first",
            content: "Teknik Serviste işlem gören ürünleriniz hakkında bilgilendirmeyi içerir",
            placement: "top"
        }
    ],
    
    "/destek/urun_iade_sartlari.php": [
        {
            element: "ürün iade şartları",
            content: "Ürün iade şartlarını içeren metne buradan ulaşabilirsiniz",
            placement: "top"
        }
    ],

    "/bayi/iade.islemleri.php": [
        {
            element: ".col45 .sub-colC",
            content: "Satınalmış olduğunuz ürünlere ilişkin iade taleplerini <b>İade Başlat<b> butonu ile iletebilir, sürecin ne aşamada olduğunu takip edebilirsiniz",
            placement: "top"
        }
     ],
     
     "kategori": [
        {
            element:   ".col.col15.fleft",
            content: "İlgili seçim için tüm filtreleri bu alanda görebilirsiniz",
            placement: "top"
        }, {
            element: ".prd-list-grids",
            content: "Liste görünümünü 3 farklı şekilde seçmenizi sağlar. (1- Liste Görünümü, 2- 4 Satır Ürün Açıklamalı, 3-Açıklamasız). Seçili seçenek bir sonraki oturum açmanızda da geçerli olacaktır.",
            backdropPadding: {
                left: 4,
                right: -24
            }
        },
         {
            element: ".sfilt",
            content: "Fiyat Gösterim Ayarı. Size tanımlı olan fiyatları yada SK fiyatı üzerine belirleyeceğiniz % eklenmiş fiyatların görüntülenmesini sağlar."
        }, {
            element: ".prd-list-sort > div:nth-child(1)",
            content: "Tüm Ürünler, Stoktaki Ürünler ve Yeni Ürünler arasında filtre kullanımı sağlar"
        }, {
            element: ".prd-list-sort > div:nth-child(2)",
            content: "Filtrenizi Fiyata Göre Artan-Azalan, Marka Sıralı gibi seçeneklerle özelleştirme imkanı sunar"
        }, {
            element: ".circles:last",
            content: "Buradaki iki noktadan default olarak sol taraftaki seçilidir. Bu durum listelerde size tanımlı fiyatların görüntülenmesini sağlar. Sağdaki   basarak bu modu kapatabilirsiniz. Bu durum olası bir durumda müşterileriniz ekranı görmesi halinde sizin fiyatlarınızın görüntülenmesini önleyecektir",
            placement: "bottom",
            backdropPadding: {
                left: 6
            }
        }, {
            element: "kategori listesi7",
            content: "Karşılaştır ve Sepete ekle butonları listelerde seçtiğiniz ürünleri karşılaştırmayı yada sepete eklemeyi sağlar"
        }, {
            element: ".stock:first",
            content: "Stok seviyesi. Stok seviyesi 5 ve yukarı olan ürünler yeşil renkte, 5 in altında kırmızı renke belirtilmiştir. Stokta olmayan ürünlerde ise telefon logosu görülecektir. Bu durumda lütfen Müşteri Temsilciniz ile iletişime geçiniz.",
            backdropPadding: {
                top: 2,
                right: 4,
                bottom: 4,
                left: 2
            }
        }, {
            element: ".hepsi_karsilastir",
            content: "Ürünü sepete atmak yada karşılaştırma yapmak için bu alanı işaretleyin.",
            placement: "left",
            backdropPadding: {
                right: 120,
                left: 4,
                top: 4,
                bottom: 4
            }
        }
    ]
};

