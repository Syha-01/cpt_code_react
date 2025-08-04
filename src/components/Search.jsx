import supabase from '../supabase-client'
import { useState } from 'react'
import { useEffect } from 'react'

export default function Search() {

  const [cptCodes, setCptCodes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   fetchCPTCodes();
  // }, []);

  const fetchCPTCodes = async () => {
    const { data, error } = await supabase.from('cpt_code_v3').select('SELECT code, long_description, FROM cpt_code_v3 WHERE column_name = {searchTerm};');
    if (error) {
      console.error('Error fetching CPT codes:', error);
    } else {
      setCptCodes(data);
    }
  };


  return (
  <div className="search-container">
    <textarea
      id="cptSearch"
      placeholder="Enter CPT codes (e.g., 97110, 97140)"
      autoComplete="off"
    ></textarea>
    <button onClick={fetchCPTCodes}>
      Fetch Codes
    </button>
    <div id="results-wrapper">
            <div id="resultsContainer">
                <button id="copyButton" className="icon-button" title="Copy Results">

                </button>
                <p class="placeholder">Results will appear here.</p>
                <ul>
      {cptCodes.map((code) => (
        <li key={code.id}>
          <p>{code.code}</p>
          <p>{code.short_description}</p>
          <p>{code.long_description}</p>
        </li>
      ))}
    </ul>
            </div>
        </div>
  </div>
)

}