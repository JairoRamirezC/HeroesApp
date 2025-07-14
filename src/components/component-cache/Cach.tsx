import { MouseEventHandler, useEffect, useState } from "react";
// import { Data } from "../../common/utils/Types";

// type LocalCache = Record<string,string>;

interface LocalCache {
  [image:string]: string;
}

const localCache:LocalCache = {};

const getDataFromApi = async (value: number):Promise<string> => {
  const url:string = `https://rickandmortyapi.com/api/character/${value}`;
  if(localCache[url]){
    return localCache[url];
  }
  const response = await fetch(url);
  const data = await response.json();
  localCache[url] = data?.image;
  return data.image;
};


export const Cach = ():JSX.Element => {
  const [data, setData] = useState<string>();
  const [numberCharacter, setNumberCharacter] = useState<number>(1);

  useEffect(() => {
    getDataFromApi(numberCharacter)
      .then((resp:string) => setData(resp));
  }, [numberCharacter]);

  const handleNextCharacter:MouseEventHandler<HTMLButtonElement> = () => {
    setNumberCharacter(prev => prev + 1);
  };

  const handlePrevCharacter:MouseEventHandler<HTMLButtonElement> = () => {
    if (numberCharacter === 1) return;
    setNumberCharacter(prev => prev - 1);
  };

  return (
    <div>
      {
        data ? 
          <div key={data}>
            <img src={data} alt="" /> 
          </div>
        : 
          <p>Vacio</p>
      }
      <button onClick={handlePrevCharacter}>Prev</button>
      <button onClick={handleNextCharacter}>Next</button>
    </div>
  );
};
