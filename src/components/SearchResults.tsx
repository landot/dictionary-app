import { Definition, DictionaryApiResponse, Meaning } from '../assets/ApiResponse';
import { PlayButton } from './PlayButton';
import newWindowIcon from '../assets/images/icon-new-window.svg';
import './SearchResults.css';
import { NotFound } from './NotFound';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { getDictionaryResults } from '../api';
import { useParams } from 'react-router-dom';

export function SearchResults() {
    const { word } = useParams()
    const [searchResults, setSearchResults] = useState<DictionaryApiResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const theme = useContext(ThemeContext);
    let audio: HTMLAudioElement | undefined;
    let resultData: DictionaryApiResponse;
    let phoneticAudio;

    function handleAudio() {
        audio && audio.play()
    }

    useEffect(() => {
        async function loadSearchResults() {
          setLoading(true);
          setError('');
  
          try {
            const data = await getDictionaryResults(word as string);
            setSearchResults(data);
          } catch (err: unknown) {
            setError(`${(err as Error).message}`);
          } finally {
            setLoading(false);
          }
        }
        loadSearchResults();
    }, [word]);


    if(error !== '') {
        return <NotFound errorMessage={error}/>
    }

    if(loading || searchResults.length === 0) {
        return <></>
    } else {
        resultData = searchResults[0];
        phoneticAudio = resultData.phonetics.filter(phonetic => phonetic.audio !== '' && phonetic.text === resultData.phonetic);
        phoneticAudio.length > 0 ? audio = new Audio(phoneticAudio[0].audio) : audio = undefined;
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
            {resultData.meanings.map((meaning: Meaning, meaningIndex) => {
                return (
                    <div key={`${meaning.partOfSpeech}-${meaningIndex}`} className='part-of-speech'>
                        <div className='divider'>
                            <h1 className='type'>{meaning.partOfSpeech}</h1>
                            <hr />  
                        </div>
                            <h2 className='sub-section'>Meaning</h2>
                        <ul>
                            {meaning.definitions.map((definition: Definition, definitionIndex) => {
                                return (
                                    <div key={`${meaning.partOfSpeech}-${meaningIndex}-${definitionIndex}`}>
                                        <li>{definition.definition}</li>
                                        {definition.example && <p>"{definition.example}"</p>}
                                    </div>
                                )
                            })}
                        </ul>
                        {meaning.synonyms.length > 0 && (
                            <div className='other-words'>
                                <h2 className='sub-section'>Synonyms</h2>
                                <p>
                                    {meaning.synonyms.join(", ")}
                                </p>
                            </div>
                        )}
                        {meaning.antonyms.length > 0 && (
                            <div className='other-words'>
                                <h2 className='sub-section'>Antonyms</h2>
                                <p>
                                    {meaning.antonyms.join(", ")}
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
                    <div className='source' key={url}>
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