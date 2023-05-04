import { Definition, DictionaryApiResponse, Meaning } from '../assets/ApiResponse';
import { PlayButton } from './PlayButton';
import newWindowIcon from '../assets/images/icon-new-window.svg';
import './SearchResults.css';
import { NotFound } from './NotFound';

export function SearchResults(props: {theme: string, searchResults: DictionaryApiResponse[], errorMessage: string}) {
    // scenario when error occurs in API response
    if(props.errorMessage !== '') {
        return <NotFound theme={props.theme} errorMessage={props.errorMessage}/>
    }

    // scenario when page initially loads
    if(props.searchResults.length === 0) {
        return <></>
    }

    const resultData = props.searchResults[0];
    return (
        <div className={`results ${props.theme}`}>
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
                                return (
                                    <>
                                        <li key={definition.definition}>{definition.definition}</li>
                                        {definition.example && <p>"{definition.example}"</p>}
                                    </>
                                )
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
            <div className='source-section'>
                <p>Source</p>
                {resultData.sourceUrls.map(url => 
                    <div className='source'>
                        <a href={url}>{url}</a>
                        <a href={url} target="_blank">
                            <img src={newWindowIcon} alt="open in new window" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    )
}