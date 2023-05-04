import { Definition, DictionaryApiResponse, Meaning } from '../assets/ApiResponse';
import { PlayButton } from './PlayButton';
import searchData from '../assets/sampleData.json';
import './SearchResults.css';

export function SearchResults() {
    const resultData: DictionaryApiResponse = searchData[0];

    return (
        <div>
            <div className='results-header'>
                <div className='header-left'>
                    <h1>{resultData.word}</h1>
                    <p>{resultData.phonetic}</p>
                </div>
                <PlayButton />
            </div>
            {resultData.meanings.map((meaning: Meaning) => {
                const synonyms = meaning.definitions.filter((definition: Definition) => definition.synonyms.length > 0).map((definition: Definition) => definition.synonyms).flat().join(", ");
                const antonyms = meaning.definitions.filter((definition: Definition) => definition.antonyms.length > 0).map((definition: Definition) => definition.antonyms).flat().join(", ");

                return (
                    <div className='part-of-speech'>
                        <div className='divider'>
                            <h1 className='type'>{meaning.partOfSpeech}</h1>
                            <hr />  
                        </div>
                            <h2 className='sub-section'>Meaning</h2>
                        <ul>
                            {meaning.definitions.map((definition: Definition) => {
                                return <li>{definition.definition}</li>
                            })}
                        </ul>
                        {synonyms && (
                            <div className='other-words'>
                                <h2 className='sub-section'>Synonyms</h2>
                                <p>
                                    {synonyms}
                                </p>
                            </div>
                        )}
                        {antonyms && (
                            <div className='other-words'>
                                <h2 className='sub-section'>Antonyms</h2>
                                <p>
                                    {antonyms}
                                </p>
                            </div>
                        )}
                    </div>
                )
            })}
            <hr />  
            <div className='source'>
                <p>Source</p>
                {resultData.sourceUrls.map(url => <a href={url}>{url}</a>)}
            </div>
        </div>
    )
}