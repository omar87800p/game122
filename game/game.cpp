#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    srand(time(0)); // ضبط العشوائية
    int target = rand() % 10 + 1; // رقم بين 1 و 10
    int guess = rand() % 10 + 1; // رقم عشوائي
    if (target == guess) {
        cout << "تهانينا! الرقم الصحيح هو " << target << "." << endl;
    } else {
        cout << "خطأ! الرقم الصحيح هو " << target << "، لكنك اخترت " << guess << "." << endl;
    }
    return 0;
}
