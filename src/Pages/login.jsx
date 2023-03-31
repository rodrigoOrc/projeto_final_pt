
    <form onSubmit={handleSubmit}>
        <input type="test" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)} value={search} />
        <button type="submit">
            <p>Login</p>
        </button>
    </form>