import './Forms.css'

function Forms() {
    return (
        <form className="form">
            <select className="select">
                <option value="undefined">escolha um...</option>
                <option value="frontend">Front-end</option>
                <option value="backend">Back-end</option>
                <option value="qa">QA</option>
                <option value="devops">DevOps</option>
                <option value="outro">Outro</option>
            </select>
            <textarea 
                placeholder="Dê sua sugestão"
                id="suggestions box"
                name="suggestions box"
                rows="15"
                cols="75"
                className="textarea">
            </textarea>
            <input type="submit" value="Submeter" className="submit"/>
        </form>
    )
}

export default Forms

