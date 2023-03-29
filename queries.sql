-- Veritabanı Sorguları

-- Posta kodu 1010 olan tüm müşterileri bulun

    SELECT * FROM Customers
    WHERE PostalCode="1010"

-- id'si 11 olan tedarikçinin telefon numarasını bulun

    SELECT Phone 
    FROM Suppliers
    WHERE SupplierID=11

-- Verilen ilk 10 siparişi, sipariş tarihine göre azalan şekilde listeleyin
-- Kayıtları azalan sırada sıralamak için DESC ifadesini kullanır.

    SELECT * FROM Orders
    ORDER BY OrderDate
    LIMIT 10

-- Londra, Madrid veya Brezilya'da yaşayan tüm müşterileri bulun

    SELECT * FROM [Customers]
    WHERE City = "London" OR City = "Madrid" OR Country="Brazil"
    veya
    WHERE City in ("London", "Madrid") OR Country="Brazil"

-- "The Shire" için bir müşteri kaydı ekleyin, ilgili kişi adı "Bilbo Baggins", adres - "Bag End" içinde "1 Hobbit-Hole", posta kodu "111" ve ülke "Middle Earth"


    INSERT INTO Customers (CustomerName, Address, PostalCode, Country)
    VALUES ("Bilbo Baggins", "Bag End", "111","Middle Earth");

-- Posta kodu "11122" olarak değişecek şekilde Bilbo Baggins kaydını güncelleyin

    UPDATE Customers
    SET PostalCode = '11122'
    WHERE CustomerName = "Bilbo Baggins"

-- (Zorlayıcı Görev) Müşteriler tablosunda kaç farklı şehrin saklandığını keşfetmek için bir sorgu bulun. Tekrarlar çift sayılmamalıdır
    
    AYNI ŞEYİ YAPARLAR:
    SELECT City FROM [Customers] 
    GROUP BY City  
    VEYA 
   SELECT DISTINCT City FROM [Customers] 
   SELECT COUNT (DISTINCT City) FROM [Customers]

-- (Zorlayıcı Görev) 20 karakterden uzun adları olan tüm tedarikçileri bulun. Adın uzunluğunu almak için "length(SupplierName)" kullanabilirsiniz.
    
    SELECT * FROM [Suppliers] WHERE LENGTH(SupplierName)>20


NOTLAR
SELECT--> GÖSTERMEK İSTEDİĞİN KOLONLAR
DISTINCT-->SELECTTEN SONRA YAZILIR  SELECT DISTINCT City -->FARKLI ŞEHİRLERİ GETİRİR
COUNT-->SAYISINI ÖĞRENMEK İSTEDİĞİN ŞEYİ PARANTEZİN İÇİNE YAZ
FROM--> HANGİ TABLODA ARIYORSUN
WHERE --> KOŞUL YAZMAK İÇİN KULLANIRIZ
ORDER BY--> SIRALAMAK İÇİN KULLANIRIZ ASC:KÜÇÜKTEN BÜYÜĞE 
LIMIT-->İLK KAÇ SATIR GELSİN? SONA YAZIYORUZ LIMIT İ
INSERT INTO -->YENİ VERİ KAYDETMEK İÇİN KULLANIRIZ INSERT INTO TABLOİSMİ (SÜTUN İSİMLERİ) VALUE (SÜTUNLARA YAZILACAKLAR)
UPDATE -->VERİ GÜNVELLEMEK İÇİN UPDATE TABLOİSMİ WHERE HANGİSÜTUN=DEĞERİ SET DEĞİŞTİRİLECEKSATIR=DEĞER 