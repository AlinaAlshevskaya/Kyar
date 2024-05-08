fetch('rooms.xml')
   .then(response => response.text())
   .then(data => {
      displayData(data);
   })
   .catch(error => console.error('Error fetching XML:', error));

function displayData(xmlString) {
   let parser = new DOMParser();
   let xmlDoc = parser.parseFromString(xmlString, "application/xml");
   let breakfast=xmlDoc.getElementsByTagName("breakfast")[0].childNodes[0].nodeValue;
   //room1
   let room1 = xmlDoc.getElementsByTagName("room1")[0];
   let name1 = room1.getElementsByTagName("name")[0].childNodes[0].nodeValue;
   let discription1 = room1.getElementsByTagName("discription")[0].childNodes[0].nodeValue;
   let price1 = room1.getElementsByTagName("price")[0].childNodes[0].nodeValue;
   let image1 = room1.getElementsByTagName("image")[0].childNodes[0].nodeValue;
   // Display the data in the HTML document
   document.getElementById('name1').textContent = name1;
   document.getElementById('price1').textContent = price1;
   document.getElementById('discr1').textContent = discription1;
   document.getElementById('image1').src = image1;
   document.getElementById('break1').textContent = breakfast;
    // room2
    let room2 = xmlDoc.getElementsByTagName("room2")[0];
    let name2 = room2.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    let discription2 = room2.getElementsByTagName("discription")[0].childNodes[0].nodeValue;
    let price2 = room2.getElementsByTagName("price")[0].childNodes[0].nodeValue;
    let image2 = room2.getElementsByTagName("image")[0].childNodes[0].nodeValue;
    // Display the data in the HTML document
    document.getElementById('name2').textContent = name2;
    document.getElementById('price2').textContent = price2;
    document.getElementById('discr2').textContent = discription2;
    document.getElementById('image2').src = image2;
    document.getElementById('break2').textContent = breakfast;
     // room3
     let room3 = xmlDoc.getElementsByTagName("room3")[0];
     let name3 = room3.getElementsByTagName("name")[0].childNodes[0].nodeValue;
     let discription3 = room3.getElementsByTagName("discription")[0].childNodes[0].nodeValue;
     let price3= room3.getElementsByTagName("price")[0].childNodes[0].nodeValue;
     let image3 = room3.getElementsByTagName("image")[0].childNodes[0].nodeValue;
     // Display the data in the HTML document
     document.getElementById('name3').textContent = name3;
     document.getElementById('price3').textContent = price3;
     document.getElementById('discr3').textContent = discription3;
     document.getElementById('image3').src = image3;
     document.getElementById('break3').textContent = breakfast;
       // room4
       let room4 = xmlDoc.getElementsByTagName("room4")[0];
       let name4 = room4.getElementsByTagName("name")[0].childNodes[0].nodeValue;
       let discription4 = room4.getElementsByTagName("discription")[0].childNodes[0].nodeValue;
       let price4= room4.getElementsByTagName("price")[0].childNodes[0].nodeValue;
       let image4 = room4.getElementsByTagName("image")[0].childNodes[0].nodeValue;
       // Display the data in the HTML document
       document.getElementById('name4').textContent = name4;
       document.getElementById('price4').textContent = price4;
       document.getElementById('discr4').textContent = discription3;
       document.getElementById('image4').src = image4;
       document.getElementById('break4').textContent = breakfast;
        // room5
        let room5 = xmlDoc.getElementsByTagName("room5")[0];
        let name5 = room5.getElementsByTagName("name")[0].childNodes[0].nodeValue;
        let discription5 = room5.getElementsByTagName("discription")[0].childNodes[0].nodeValue;
        let price5= room5.getElementsByTagName("price")[0].childNodes[0].nodeValue;
        let image5 = room5.getElementsByTagName("image")[0].childNodes[0].nodeValue;
        // Display the data in the HTML document
        document.getElementById('name5').textContent = name5;
        document.getElementById('price5').textContent = price5;
        document.getElementById('discr5').textContent = discription5;
        document.getElementById('image5').src = image5;
        document.getElementById('break5').textContent = breakfast;
         // room6
         let room6 = xmlDoc.getElementsByTagName("room6")[0];
         let name6 = room6.getElementsByTagName("name")[0].childNodes[0].nodeValue;
         let discription6 = room6.getElementsByTagName("discription")[0].childNodes[0].nodeValue;
         let price6= room6.getElementsByTagName("price")[0].childNodes[0].nodeValue;
         let image6 = room6.getElementsByTagName("image")[0].childNodes[0].nodeValue;
         // Display the data in the HTML document
         document.getElementById('name6').textContent = name6;
         document.getElementById('price6').textContent = price6;
         document.getElementById('discr6').textContent = discription6;
         document.getElementById('image6').src = image6;
         document.getElementById('break6').textContent = breakfast;
         // room7
         let room7 = xmlDoc.getElementsByTagName("room7")[0];
         let name7 = room7.getElementsByTagName("name")[0].childNodes[0].nodeValue;
         let discription7 = room7.getElementsByTagName("discription")[0].childNodes[0].nodeValue;
         let price7= room7.getElementsByTagName("price")[0].childNodes[0].nodeValue;
         let image7 = room7.getElementsByTagName("image")[0].childNodes[0].nodeValue;
         // Display the data in the HTML document
         document.getElementById('name7').textContent = name7;
         document.getElementById('price7').textContent = price7;
         document.getElementById('discr7').textContent = discription5;
         document.getElementById('image7').src = image7;
         document.getElementById('break7').textContent = breakfast;
}