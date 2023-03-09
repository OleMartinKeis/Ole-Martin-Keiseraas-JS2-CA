export function profileTemplate(profileData) {
    const profile = document.createElement("div");
    profile.innerHTML += `
    <section>
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-12 col-lg-10">
                    <div class="card">
                    <div class="rounded-top text-white d-flex flex-row green" style="height: 200px">
                        <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px">
                            <img src="${profileData.avatar}" class="img-fluid img-thumbnail rounded-circle mb-2" style="width: 150px; height: 150px; margin-top:-15px; z-index: 1"></img>
                        </div>
                        <div class="ms-3" style="margin-top: 130px">
                            <h5>${profileData.name}</h5>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="mb-5">
                            <p class="lead fw-normal mb-1">About</p>
                            <div class="p-4" style="background-color: #f8f9fa">
                                <p >Front-end Developer<i class="fab fa-apple ms-3"></i></p>
                                <p">Lives wherever<i class="fas fa-space-shuttle ms-3"></i></p>
                                <p">Tall<i class="fas fa-arrow-up ms-3"></i></p> -->
                                <form>
                                <div class="form-outline mb-4">
                                    <label
                                    class="form-label"
                                    for="form2Example27"
                                    >Name</label>
                                    <input type="text" disabled name="name" placeholder="${profileData.name}" class="form-control form-control-lg"/>
                                </div>
                            </div>
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form2Example27">Email</label>
                                <input type="email" disabled name="email" placeholder="${profileData.email}"class="form-control form-control-lg"/>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    <div class="d-flex justify-content-center align-items-center">
        <a href="../../posts/" class="btn btn-two btn-lg btn-outline-success" width="" style=" padding: 8px; border-radius: 0.65rem; text-decoration: none ";>Back to feed</a>
    </div>`;

    return profile
}

export function renderProfileTemplate(profileData, parent) {
    parent.append(profileTemplate(profileData));
  }