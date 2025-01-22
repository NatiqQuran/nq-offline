import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@yakad/ui";
import Symbol from "@yakad/symbols";

export function GoOnlineButton() {
    const [online, setOnline] = useState<boolean>(navigator.onLine);

    useEffect(() => {
        ononline = () => setOnline(true);
        onoffline = () => setOnline(false);
    }, []);

    return (
        <>
            {online ? (
                <Link to="https://natiq.net">
                    <Button
                        variant="elevated"
                        icon={<Symbol icon="start" />}
                        disabled
                    >
                        Go Online
                    </Button>
                </Link>
            ) : (
                <Button
                    variant="elevated"
                    icon={<Symbol icon="offline_bolt" />}
                    disabled
                >
                    Offline
                </Button>
            )}
        </>
    );
}
