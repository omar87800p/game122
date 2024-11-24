from flask import Flask
import random
import subprocess

app = Flask(__name__)

@app.route('/run-python')
def run_python():
    # لعبة تخمين الرقم بلغة Python
    target = random.randint(1, 10)
    guess = random.randint(1, 10)
    if target == guess:
        return f"تهانينا! الرقم الصحيح هو {target}."
    else:
        return f"خطأ! الرقم الصحيح هو {target}، لكنك اخترت {guess}."

@app.route('/run-cpp')
def run_cpp():
    # تشغيل لعبة C++ باستخدام subprocess
    result = subprocess.run(['./cpp_game'], capture_output=True, text=True)
    return result.stdout

if __name__ == '__main__':
    app.run(debug=True)
