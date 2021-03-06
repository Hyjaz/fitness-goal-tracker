declare module 'fitness-goal-tracker' {

  export interface MacroNutrient {
    _id: string;
    mealNumber: number;
    proteins: string;
    carbohydrates: string;
    fat: string;
    status: boolean;
  }

  export interface DailyIntake {
    _id: string;
    date: Date;
    macroNutrients: MacroNutrient[];
  }

  export interface Cycle {
    _id: string;
    name: string;
    startTime: Date;
    endTime: Date;
    dailyIntakes: DailyIntake[];
  }

  export interface User {
    uuid: string;
    cycles: Cycle[];
  }
}
