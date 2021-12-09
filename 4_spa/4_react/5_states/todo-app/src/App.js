import React, { useState } from 'react';

import './App.css';

function App()
{
    const [ tasks, setTasks ] = useState([]);
    const [ inputText, setInputText ] = useState("");
    const [ showError, setShowError ] = useState(false);

    /**
     * @method createId();
     * @description Gibt eine zufällige ID zurück.
     * @returns { string }
     */
    const createId = () =>
    {
        return Math.random().toString(16).substr(2, 8); // 254e82e3;
    }

    /**
     * @method handleNewTaskInput();
     * @description Behandelt die eingabe des textfeldes.
     * @param { object } e 
     */
    const handleNewTaskInput = (e) => 
    {
        setInputText(e.target.value);
    }

    /**
     * @method addTask();
     * @description fügt eine neue task hinzu und löscht den inhalt des textfeldes.
     */
    const addTask = () =>
    {
        if(inputText !== "")
        {
            const newTask = 
            {
                id: createId(),
                text: inputText,
                isFinished: false
            };
    
            setTasks(tasks => [newTask, ...tasks]);
            setShowError(false);
            setInputText("");
        }
        else
        {
            setShowError(true);
        }
    }

    /**
     * @method toggleTask();
     * @description Schaltet den zustand eines task um.
     * @param { object } e 
     * @param { string } id - die ID des eintrags 
     */
    const toggleTask = (e, id) =>
    {
        const currentTask = tasks.filter(task => task.id === id)[0];
        const otherTasks = tasks.filter(task => task.id !== id);

        // Boolean Toggle:
        currentTask.isFinished = !currentTask.isFinished;
        setTasks([ currentTask, ...otherTasks ]);
    }

    /**
     * @method deleteTask();
     * @description Löscht ein element aus der task array anhand der übergebenen ID
     * @param { object } e
     * @param { string } id
     */
    const deleteTask = (e, id) =>
    {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    }

    return (
        <div className="App">
            {/* zum testen der zufalls ID */}
            {/* { createId() } */}

            <h1>Todo App</h1>

            <h2>Neue Aufgabe</h2>

            <div className="newTaskInput">
                <input 
                    type="text" 
                    onChange={ handleNewTaskInput }
                    value={ inputText } 
                    className={ `${ showError ? "errorOutline" : "normalOutline" }`}
                ></input>
                <button onClick={ addTask }>Task hinzufügen</button>

                {
                    showError && <p className="error">Text darf nicht leer sein!</p>
                }
            </div>

            <h2>Aufgaben</h2>
            {
                tasks.length > 0 ?
                <ul>
                    {
                        tasks.map((task, i) => 
                        {
                            return(
                                <li key={ i } className={ task.isFinished ? 'finished' : 'active' }>
                                    <span className="taskText" onClick={ (e) => toggleTask(e, task.id) }>
                                        { task.text }
                                    </span>
                                    <button onClick={ (e) => deleteTask(e, task.id) }>x</button>
                                </li>
                            )
                        })
                    }
                </ul>
                :
                <p>Keine Aufgaben vorhanden!</p>
            }

            <p className="copyrightLine">
                <i>
                    &copy; { new Date().getFullYear() } by D02-1 CrazyCoders
                </i>
            </p>
        </div>
    );
}

export default App;
