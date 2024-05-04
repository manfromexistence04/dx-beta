import { atom } from "jotai";
import { jotaiStore } from "../../jotai";
export const overwriteConfirmStateAtom = atom({
    active: false,
});
export async function openConfirmModal({ title, description, actionLabel, color, }) {
    return new Promise((resolve) => {
        jotaiStore.set(overwriteConfirmStateAtom, {
            active: true,
            onConfirm: () => resolve(true),
            onClose: () => resolve(false),
            onReject: () => resolve(false),
            title,
            description,
            actionLabel,
            color,
        });
    });
}
