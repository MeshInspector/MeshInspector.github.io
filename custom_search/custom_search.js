var weightsMap;
const cThresholdDistance = 0.5;

function calcWeight( itemStr, searchStr )
{
    return itemStr.includes( searchStr ) ? 1 : 0;
}

function createItemWeights( searchStr )
{
  weightsMap = new Array( searchData.length );
  for ( var i = 0; i < searchData.length; i++ )
  {
    var itemName = searchData[i][0].toLowerCase().substring(1); // strip '_'
    weightsMap[i] = [calcWeight( itemName, searchStr ), i];
  }
  weightsMap.sort( (a, b) => b[0] - a[0] );
}

function addResult( results, itemIndex, resultsPath )
{
  function setKeyActions(elem,action) {
    elem.setAttribute('onkeydown',action);
    elem.setAttribute('onkeypress',action);
    elem.setAttribute('onkeyup',action);
  }

  function setClassAttr(elem,attr) {
    elem.setAttribute('class',attr);
    elem.setAttribute('className',attr);
  }

  var id = searchData[itemIndex][0];
  var srResult = document.createElement('div');
  srResult.setAttribute('id','SR_'+id);
  srResult.style.display = 'block';
  setClassAttr(srResult,'SRResult');

  var srEntry = document.createElement('div');
  setClassAttr(srEntry,'SREntry');

  var srLink = document.createElement('a');
  srLink.setAttribute('id','Item'+itemIndex);
  setKeyActions(srLink,'return searchResults.Nav(event,'+itemIndex+')');
  setClassAttr(srLink,'SRSymbol');
  srLink.innerHTML = searchData[itemIndex][1][0];
  srEntry.appendChild(srLink);

  if (searchData[itemIndex][1].length==2) // single result
  {
    srLink.setAttribute('href', resultsPath + searchData[itemIndex][1][1][0]);
    srLink.setAttribute('onclick','searchBox.CloseResultsWindow()');
    if (searchData[itemIndex][1][1][1]) {
      srLink.setAttribute('target','_parent');
    } else {
      srLink.setAttribute('target','_blank');
    }
    const srScope = document.createElement('span');
    setClassAttr(srScope,'SRScope');
    srScope.innerHTML = searchData[itemIndex][1][1][2];
    srEntry.appendChild(srScope);
  }
  else // multiple results
  {
    srLink.setAttribute('href','javascript:searchResults.Toggle("SR_'+id+'")');
    const srChildren = document.createElement('div');
    setClassAttr(srChildren,'SRChildren');
    for (let c=0; c<searchData[itemIndex][1].length-1; c++)
    {
      const srChild = document.createElement('a');
      srChild.setAttribute('id','Item'+itemIndex+'_c'+c);
      setKeyActions(srChild,'return searchResults.NavChild(event,'+itemIndex+','+c+')');
      setClassAttr(srChild,'SRScope');
      srChild.setAttribute('href', resultsPath + searchData[itemIndex][1][c+1][0]);
      srChild.setAttribute('onclick','searchBox.CloseResultsWindow()');
      if (searchData[itemIndex][1][c+1][1])
      {
        srChild.setAttribute('target','_parent');
      }
      srChild.innerHTML = searchData[itemIndex][1][c+1][2];
      srChildren.appendChild(srChild);
    }
    srEntry.appendChild(srChildren);
  }
  srResult.appendChild(srEntry);
  results.appendChild(srResult);
}

function createCustomSearchResults( searchStr, resultsPath )
{
  if ( searchStr == "" )
    return 0;

  createItemWeights( searchResults.convertToId( searchStr ) );

  const results = document.getElementById("SRResults");
  results.innerHTML = '';
  var i = 0
  for ( ; i < weightsMap.length; i++ )
  {
    const weightItem = weightsMap[i];
    if ( weightItem[0] < cThresholdDistance )
      break;
    addResult( results, weightItem[1], resultsPath );
  }
  return i;
}