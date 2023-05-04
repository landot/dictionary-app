import { Definition, DictionaryApiResponse, Meaning } from '../assets/ApiResponse';
import { PlayButton } from './PlayButton';
import newWindowIcon from '../assets/images/icon-new-window.svg';
import './SearchResults.css';
import { NotFound } from './NotFound';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function SearchResults(props: {searchResults: DictionaryApiResponse[], errorMessage: string}) {
    const theme = useContext(ThemeContext);
    let audio: HTMLAudioElement | undefined;
    
    // scenario when error occurs in API response
    if(props.errorMessage !== '') {
        return <NotFound errorMessage={props.errorMessage}/>
    }

    // scenario when page initially loads
    if(props.searchResults.length === 0) {
        return <></>
    }

    const resultData = props.searchResults[0];
    const phoneticAudio = resultData.phonetics.filter(phonetic => phonetic.audio !== '' && phonetic.text === resultData.phonetic);
    phoneticAudio.length > 0 ? audio = new Audio(phoneticAudio[0].audio) : audio = undefined;

    function handleAudio() {
      audio && audio.play()
    }

    return (
        <div className={`results ${theme}`}>
            <div className='results-header'>
                <div className='header-left'>
                    <h1>{resultData.word}</h1>
                    <p>{resultData.phonetic}</p>
                </div>
                {audio && <PlayButton onClick={handleAudio}/>}
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