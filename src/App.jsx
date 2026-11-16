import { useState } from "react";

function ColorTask() {
  const [color, setColor] = useState("red");

  return (
    <div>
      <h2>1. Rang tanlash</h2>

      <select onChange={(e) => setColor(e.target.value)}>
        <option value="red">Qizil</option>
        <option value="green">Yashil</option>
        <option value="blue">Ko'k</option>
      </select>

      <div style={{ backgroundColor: color, height: "100px" }}></div>
    </div>
  );
}

function NameTask() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>2. Ismni ko'rsatish</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ismingizni yozing"
      />

      {name && <h3>Salom, {name}!</h3>}
    </div>
  );
}

function PasswordTask() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      <h2>3. Parolni ko'rsatish</h2>

      <input type={showPassword ? "text" : "password"} />

      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Yashirish" : "Ko'rsatish"}
      </button>
    </div>
  );
}

function App() {
  return (
    <main>
      <ColorTask />
      <NameTask />
      <PasswordTask />
    </main>
  );
}

export default App;