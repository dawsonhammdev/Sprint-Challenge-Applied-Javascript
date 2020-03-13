// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios 
  .get('https://lambda-times-backend.herokuapp.com/topics')
  .then(res => {
    //console.log(res, 'thing')
    res.data.topics.forEach(i => {
        //console.log(i, 'figuring out i' )
        tabs.appendChild(CreateTab(i));
      })

  })
  .catch(error => {
    console.log('error', error);
  })

  

  const tabs = document.querySelector('.topics');

//create elements
function CreateTab(data){
    const tabData = document.createElement('div');

  
  //set your content
  
  tabData.textContent = data;

  
  //structure your DOM

  tabData.classList.add('tab');

  
  tabs.append(tabData);
 
  
  return tabData
  }


