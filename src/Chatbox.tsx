import React from 'react';
import { render  } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';

interface IState {
    code?: string;
}
class Chatbox extends React.Component<{
    language: string;
},IState> {
    constructor(props:any) {
        super(props);
        this.state = {
            code: '// type your code...',
                
        }
          
    }
    editorDidMount(editor:any, monaco:any) {
        console.log('editorDidMount', editor);
        editor.focus();
          
    }
    onChange(newValue:any, e:any) {
        console.log('onChange', newValue, e);
          
    }
    render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true,
            lineNumbers: 'off' as any,
            minimap: {enabled: false}
                
        };
        return (
            <MonacoEditor
            width="1024"
            height="100"
            language={this.props.language}
            theme="vs-dark"
            value={code}
            options={options}
            onChange={this.onChange}
            editorDidMount={this.editorDidMount}
        
            />
                
        );
          
    }    
}
export default Chatbox;
