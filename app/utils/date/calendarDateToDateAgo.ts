const formatRelativeDate = (dateString: string): string => {
    if (dateString.startsWith("Il y a")) {
        return dateString;
    }

    try {
        const date = new Date(dateString);
        const now = new Date();
        const diffInMs = now.getTime() - date.getTime();
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

        if (diffInDays < 0 || diffInDays < 30) {
            return date.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
        }

        const diffInMonths = Math.floor(diffInDays / 30);
        
        if (diffInMonths < 12) {
            return `Il y a ${diffInMonths} mois`;
        }

        const diffInYears = Math.floor(diffInDays / 365);
        return `Il y a ${diffInYears} an${diffInYears > 1 ? 's' : ''}`;
    } catch (error) {
        return dateString;
    }
};

export default formatRelativeDate;