import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from './recipeSlice'
import { createFavoritesSlice, FavoritesSliceType } from './favoritesSlice'
import { createNotificationSlice, NotificationSliceType } from './notificationSlice'
import { AISlice, createAISlice } from './aiSlice'

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AISlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
})))

// Slice Pattern