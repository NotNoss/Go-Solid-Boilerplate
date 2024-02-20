import { Component, createResource } from 'solid-js';

const App: Component = () => {
  const fetchHealth = async (endpoint: string) => {
    const response = await fetch(`http://localhost:3000/${endpoint}`);

    return response.json();
  }

  const [health, {mutate, refetch}] = createResource('health', fetchHealth);

  return (
    <div>
      <Switch fallback={<div>Not Found </div>}>
        <Match when={health.state === 'pending' || health.state === 'unresolved'}>
          Loading...
        </Match>
        <Match when={health.state === 'ready'}>
          <div>
            <h1>The API is working!</h1>
            <p>{JSON.stringify(health())}</p>
          </div>
        </Match>
        <Match when={health.state === 'errored'}>
          {JSON.stringify(health.error)}
        </Match>
      </Switch>
    </div>
  );
};

export default App;
