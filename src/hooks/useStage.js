import { useState } from 'react';

import { createStage } from '../Tetrus/gameHelpers';

export const useStage = () => {
    const [stage, setStage] = useState(createStage());
    return [stage, setStage];
}