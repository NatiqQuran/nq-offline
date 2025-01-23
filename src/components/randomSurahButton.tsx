import { useNavigate } from "react-router-dom";
import { SurahListResponseData } from "@ntq/sdk";
import { Button } from "@yakad/ui";

interface RandomSurahButtonProps {
    surahList: SurahListResponseData;
}

export function RandomSurahButton(props: RandomSurahButtonProps) {
    const navigate = useNavigate();

    const surahLength: number = props.surahList.length;

    const randomNumber: number = Math.floor(Math.random() * surahLength);

    return (
        <Button
            variant="outlined"
            onClick={() => {
                navigate("/quran/" + props.surahList[randomNumber].uuid);
            }}
        >
            Random Surah
        </Button>
    );
}
