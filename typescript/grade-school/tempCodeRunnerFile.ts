type Roster = Map<string, Array<string>>;

class GradeSchool {
  private _roster: Roster = new Map();

  // constructor() {}

  studentRoster = (): Roster => this._copyRoster();

  /**
   * Makes a copy of the student roster to pass last 2 tests
   */
  private _copyRoster = (): Roster => {
    const newMap: Roster = new Map();

    this._roster.forEach((value, key) => {
      // newMap.set(key, [...value]));
      // dont use the spread operator just to be more inclusive than ES6
      newMap.set(key, Array.from(value));
    });
    return newMap;
  };
  /**
   * gets previous names or a empty array because it can come undefined and then adds an extra name and sets the grade to a new array.
   *
   * Does the sort immediately since 2 functions need sorting
   * @param name
   * @param grade
   */
  addStudent = (name: string, grade: number): void => {
    this._roster.set(
      grade.toString(),
      (this._roster.get(grade.toString()) || []).concat([name]).sort()
    );
  };

  studentsInGrade = (grade: number): Array<string> =>
    this._copyRoster().get(grade.toString()) || [];
}

export default GradeSchool;

console.log("aaa");
