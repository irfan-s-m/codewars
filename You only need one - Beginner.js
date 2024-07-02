function check(a, x) {
    const output = a.find(element => element === x
    );
    if (output === x) {
        return true;
    }
    else {
        return false;
    }
};
const array = ['ds', 'd', 's', 'g']
const value = 'd'

check(array, value)


/* Instructions
 
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.*/