import {
  changeResults,
  zeroResults
} from './reduxService';

export default function formatTable (allData,setAllFiles,dispatch) {
    let subitems = [];
    allData?.map((item) => {
      item?.lines.forEach((data) => {
        subitems.push({
          file: item.file,
          text: data.text,
          number: data.number,
          hex: data.hex,
        });
      });
      return null;
    });
    if(subitems.length!==0){
      dispatch(changeResults(subitems.length));
    }else{
      dispatch(zeroResults());
    }
    setAllFiles(subitems);
  };