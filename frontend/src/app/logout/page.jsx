    const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    window.location.href = "/"; // redirect to home
    };
